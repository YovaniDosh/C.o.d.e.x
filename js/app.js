// Punto de entrada de la aplicación

import { saveTasks, loadTasks } from "./storage.js";

// ===============================
// REFERENCIAS DEL DOM
// ===============================

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

// ===============================
// ESTADO DE LA APLICACIÓN
// ===============================

let tasks = loadTasks();
let currentFilter = "all";

// ===============================
// INICIALIZACIÓN
// ===============================

init();

function init() {

    addTaskButton.addEventListener(
        "click",
        addTask
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
        renderTasks
    );

    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            changeFilter
        );

    });

    renderTasks();

    updateCounter();

}
// ===============================
// ACTUALIZAR INTERFAZ
// ===============================

function refreshUI() {

    renderTasks();

    updateCounter();

    saveTasks(tasks);

}


// ===============================
// FUNCIONES
// ===============================

function addTask() {

    const taskText = taskInput.value.trim();

    if (!taskText) {

        alert("Debes escribir una tarea.");

        return;

    }

    createTask(taskText);

    refreshUI();

    clearInput();

}
function createTask(text) {

    tasks.push({

        id: crypto.randomUUID(),

        text,

        completed: false,

        priority: prioritySelect.value,

        createdAt: new Date().toISOString(),

        dueDate: dateInput.value

    });

}

function getFilteredTasks() {

    const searchText = searchInput.value
        .trim()
        .toLowerCase();

    return tasks.filter(task => {

        const matchesSearch =
            task.text
                .toLowerCase()
                .includes(searchText);

        const matchesFilter =

            currentFilter === "all"

            ||

            (currentFilter === "pending" && !task.completed)

            ||

            (currentFilter === "completed" && task.completed);

        return matchesSearch && matchesFilter;

    });

}

function createTaskHTML(task, index) {

    return `

        <li class="task-item ${isOverdue(task) ? "vencida" : ""}">

            <span class="task-text ${task.completed ? "completed" : ""}" data-index="${index}"> 

                <span
                class="${task.completed ? "completed" : ""}"
                data-id="${task.id}">

                ${task.text}

                <span class="priority ${task.priority}">

                    ${getPriorityText(task.priority)}

                </span>

                <div class="task-date">

                    ${formatDate(task.dueDate)}

                </div>

            </span>

            <div>

                <button
                    class="complete-button"
                    data-id="${task.id}">

                    ${task.completed ? "↩" : "✔"}

                </button>

                <button
                    class="delete-button"
                    data-id="${task.id}">

                    🗑

                </button>

            </div>

        </li>

    `;

}

function renderTasks() {

    const filteredTasks = getFilteredTasks();

    taskList.innerHTML = "";

    if (!filteredTasks.length) {

        taskList.innerHTML = `

            <p class="empty-message">

                No se encontraron tareas.

            </p>

        `;

        return;

    }

    filteredTasks.forEach((task, index) => {

        taskList.innerHTML += createTaskHTML(task, index);

    });

}

function findTaskIndex(id) {

    return tasks.findIndex(task => task.id === id);

}

function deleteTask(index) {

    tasks.splice(index, 1);

    refreshUI();

}

function toggleTask(index) {

    tasks[index].completed =

        !tasks[index].completed;

    refreshUI();

}

function handleEnterKey(event){

    if(event.key === "Enter"){

        addTask();

    }

}

function handleTaskActions(event) {

    const button = event.target;

    const id = button.dataset.id;

    const index = findTaskIndex(id);

    if (index === -1) {

    return;

}

    if (button.classList.contains("delete-button")) {

        deleteTask(index);

    }

    if (button.classList.contains("complete-button")) {

        toggleTask(index);

    }

}
taskList.addEventListener("dblclick", editTask);

function editTask(event){

    if(event.target.tagName !== "SPAN"){

        return;

    }

    const id = event.target.dataset.id;

    const index = findTaskIndex(id);

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

    tasks[index].text = newText.trim();

    refreshUI();

}

function updateCounter() {

    taskCounter.textContent =

        `${tasks.length} ${tasks.length === 1 ? "tarea" : "tareas"}`;

}

function clearInput() {

    taskInput.value = "";

    dateInput.value = "";

    prioritySelect.value = "medium";

    taskInput.focus();

}

function changeFilter(event) {
    currentFilter = event.target.dataset.filter;
    updateActiveFilter();
    renderTasks();
}
function updateActiveFilter() {
    filterButtons.forEach(button=>{
        button.classList.remove("active");
    })

    document
        .querySelector(
            `[data-filter="${currentFilter}"]`
        )
        .classList.add("active");
}
function getPriorityText(priority){
    const priorities = {
        high:"Alta",

        medium:"Media",

        low:"Baja"
    }
    return priorities[priority];
}
function formatDate(date) {

    if (!date) {

        return "Sin fecha";

    }

    return new Date(date)
        .toLocaleDateString(
            "es-ES",
            {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            }
        );

}
function isOverdue(task) {

    if (!task.dueDate || task.completed) {

        return false;

    }

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const dueDate = new Date(task.dueDate);

    dueDate.setHours(0, 0, 0, 0);

    return dueDate < today;

}