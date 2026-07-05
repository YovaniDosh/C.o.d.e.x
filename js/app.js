// ===============================
// REFERENCIAS DEL DOM
// ===============================

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");

// ===============================
// ESTADO DE LA APLICACIÓN
// ===============================

const tasks = [];

// ===============================
// EVENTOS
// ===============================

addTaskButton.addEventListener("click", addTask);

// ===============================
// FUNCIONES
// ===============================

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Debes escribir una tarea.");

        return;

    }

    createTask(taskText);

    renderTasks();

    updateCounter();

    clearInput();

}

function createTask(text) {

    tasks.push(text);

}

function renderTasks() {

    taskList.innerHTML = "";

    for (const task of tasks) {

        taskList.innerHTML+= `
            <li>${task}</li>
        `;

    }

}
function updateCounter() {
    if (tasks.length === 1) {
        taskCounter.textContent = `${tasks.length} tarea`;
    } else {
        taskCounter.textContent = `${tasks.length} tareas`;
    }
}
function clearInput(){

    taskInput.value = "";
    taskInput.focus();

}