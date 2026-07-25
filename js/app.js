// Punto de entrada de la aplicación

import { saveTasks, loadTasks } from "./storage.js";
import { CONFIG,FILTERS, MESSAGES,SORT_OPTIONS } from "./constants.js";
import { renderTasks, updateCounter, updateActiveFilter,renderStats } from "./ui.js";
import { filterTasks, sortTasks } from "./filters.js";
import { createTask, addTask, deleteTask, toggleTask, updateTaskText, findTaskIndex } from "./tasks.js";
import { applyTheme, loadTheme, saveTheme, toggleTheme} from "./theme.js";
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
const themeToggle = document.getElementById("themeToggle");
const sortSelect = document.getElementById("sortSelect");

// ===============================
// ESTADO DE LA APLICACIÓN
// ===============================

let tasks = loadTasks();
let currentFilter = FILTERS.ALL;
let currentSort = SORT_OPTIONS.DEFAULT;
let currentTheme = loadTheme();
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

    sortSelect.addEventListener(
        "change",
        changeSort
    );

    themeToggle.addEventListener(
        "click",
        handleThemeToggle
    );

    applyTheme(currentTheme, themeToggle);

    refreshUI();

}
// ===============================
// ACTUALIZAR INTERFAZ
// ===============================

function refreshUI() {

    const filteredTasks = filterTasks(
        tasks,
        searchInput.value,
        currentFilter
    );

    const sortedTasks = sortTasks(
        filteredTasks,
        currentSort
    );

    renderTasks(
        taskList,
        sortedTasks
    );

    updateCounter(
        taskCounter,
        sortedTasks.length,
        tasks.length
    );

    renderStats(
        statsContainer,
        calculateStats(tasks)
    );
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

    persistAndRefresh();

    clearInput();

}

function handleEnterKey(event){

    if(event.key === "Enter"){

        event.preventDefault();

        handleAddTask();

    }

}

function handleTaskActions(event) {

    const button =
        event.target.closest(
            "button[data-id]"
        );

    if (!button) {

        return;

    }

    const id =
        button.dataset.id;

    const index =
        findTaskIndex(tasks, id);

    if (index === -1) {

        return;

    }

    if (
        button.classList.contains(
            "delete-button"
        )
    ) {

        deleteTask(tasks, id);

        persistAndRefresh();

        return;

    }

    if (
        button.classList.contains(
            "complete-button"
        )
    ) {

        toggleTask(tasks, id);

        persistAndRefresh();

    }

}

function editTask(event) {

    const taskText =
        event.target.closest(
            ".task-text[data-id]"
        );

    if (!taskText) {

        return;

    }

    const id =
        taskText.dataset.id;

    const index =
        findTaskIndex(tasks, id);

    if (index === -1) {

        return;

    }

    const newText =
        prompt(
            "Editar tarea:",
            tasks[index].text
        );

    if (newText === null) {

        return;

    }

    const normalizedText =
        newText.trim();

    if (!normalizedText) {

        return;

    }

    updateTaskText(
        tasks,
        id,
        normalizedText
    );

    persistAndRefresh();

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

function changeSort(event)
{
    currentSort = event.target.value;
    refreshUI();
}

function handleThemeToggle() {

    currentTheme =
        toggleTheme(currentTheme);

    applyTheme(
        currentTheme,
        themeToggle
    );

    saveTheme(currentTheme);

}

function persistAndRefresh() {

    saveTasks(tasks);

    refreshUI();

}