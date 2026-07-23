// Punto de entrada de la aplicación

import { saveTasks, loadTasks } from "./storage.js";
import { CONFIG,FILTERS, MESSAGES } from "./constants.js";
import { renderTasks, updateCounter, updateActiveFilter,renderStats } from "./ui.js";
import { filterTasks } from "./filters.js";
import { createTask, addTask, deleteTask, toggleTask, updateTaskText, findTaskIndex } from "./tasks.js";
import { calculateStats } from "./stats.js";
import { seedTasks } from "./seed.js";

seedTasks();

// ===============================
// REFERENCIAS DEL DOM
// ===============================

const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const dateInput = document.getElementById("dateInput");
const addTaskButton = document.getElementById("addTaskButton");
const searchInput = document.getElementById("searchInput");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");
const filterButtons = document.querySelectorAll(".filter-button");
const statsContainer = document.getElementById("statsContainer");

// ===============================
// ESTADO DE LA APLICACIÓN
// ===============================

let tasks = loadTasks();
let currentFilter = FILTERS.ALL;

// ===============================
// INICIALIZACIÓN
// ===============================

init();

function init() {

    addTaskButton.addEventListener(
        "click",
        handleAddTask
    );

    taskInput.addEventListener(
        "keydown",
        handleEnterKey
    );

    taskList.addEventListener(
        "click",
        handleTaskActions
    );

    taskList.addEventListener(
        "dblclick",
        editTask
    );

    searchInput.addEventListener(
        "input",
        refreshUI
    );

    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            changeFilter
        );

    });

    refreshUI();

}
// ===============================
// ACTUALIZAR INTERFAZ
// ===============================

function refreshUI() {

    renderTasks(
        taskList, 
        filterTasks(
            tasks, 
            searchInput.value, 
            currentFilter
        )
    );

    updateCounter(
        taskCounter,
        tasks.length
    );

    renderStats(
        statsContainer,
        calculateStats(tasks)
    );

    saveTasks(tasks);

}


// ===============================
// FUNCIONES
// ===============================


function handleAddTask() {

    const taskText = taskInput.value.trim();

    if (!taskText) {

        alert(MESSAGES.EMPTY_TASK);

        return;

    }

    const task = createTask(

        taskText,

        prioritySelect.value,

        dateInput.value

    );

    addTask(tasks, task);

    refreshUI();

    clearInput();

}

function handleEnterKey(event){

    if(event.key === "Enter"){

        event.preventDefault();

        handleAddTask();

    }

}

function handleTaskActions(event) {

    const button = event.target;

    const id = button.dataset.id;

    const index = findTaskIndex(tasks, id);

    if (index === -1) {

    return;

}

    if (button.classList.contains("delete-button")) {

        deleteTask(

        tasks,

        id

    );

    refreshUI();

    }

    if (button.classList.contains("complete-button")) {

        toggleTask(tasks, id);
        refreshUI();

    }

}


function editTask(event){

    if(event.target.tagName !== "SPAN"){

        return;

    }

    const id = event.target.dataset.id;

    const index = findTaskIndex(tasks, id);

    if (index === -1) {

        return;

    }
    
    const newText = prompt(

        "Editar tarea:",

        tasks[index].text

    );

    if(newText === null){

        return;

    }

    if(newText.trim()===""){

        return;

    }

    updateTaskText(

    tasks,

    id,

    newText.trim()

    );
    refreshUI();
}

function clearInput() {

    taskInput.value = "";

    dateInput.value = "";

    prioritySelect.value = CONFIG.DEFAULT_PRIORITY;
    
    taskInput.focus();

}

function changeFilter(event){

    currentFilter = event.target.dataset.filter;

    updateActiveFilter(
        filterButtons,
        currentFilter
    );

    refreshUI();

}
