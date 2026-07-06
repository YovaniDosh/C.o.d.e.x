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

    const task = {

        text: text,

        completed: false

    };

    tasks.push(task);

}

function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        taskList.innerHTML += `

        <li class="task-item">

            <span class="${task.completed ? "completed" : ""}">

            ${task.text}

            </span>

            <div>

                <button onclick="toggleTask(${index})">

                    ✔

                </button>

                <button onclick="deleteTask(${index})">

                    🗑
               
                </button>

            </div>

        </li>

        `;

    });

}

function deleteTask(index) {

    tasks.splice(index, 1);

    renderTasks();

    updateCounter();

}

function toggleTask(index){

    tasks[index].completed = !tasks[index].completed;

    renderTasks();

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