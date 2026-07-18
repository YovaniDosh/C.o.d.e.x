// Punto de entrada de la aplicación

// ===============================
// REFERENCIAS DEL DOM
// ===============================

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-button");
const prioritySelect = document.getElementById("prioritySelect");
const dateInput = document.getElementById("dateInput");
let currentFilter = "all";

// ===============================
// ESTADO DE LA APLICACIÓN
// ===============================

const tasks = [];

// ===============================
// EVENTOS
// ===============================

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", handleEnterKey);
taskList.addEventListener("click", handleTaskActions);
searchInput.addEventListener("input", renderTasks);

filterButtons.forEach(button => {
    button.addEventListener("click", changeFilter)
})

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
function createTask(text){

    const task = {

        text:text,

        completed:false,

        priority:prioritySelect.value,

        createdAt:new Date().toISOString(),

        dueDate:dateInput.value

    };


    tasks.push(task);

}

function renderTasks() {

    const searchText = searchInput.value.toLowerCase();
    let filteredTasks = tasks.filter(task =>
        task.text
            .toLowerCase()  
            .includes(searchText)
    );
    
    if(currentFilter === "pending"){
        filteredTasks = filteredTasks.filter(
            task => !task.completed
        )
    }

    if(currentFilter === "completed"){
        filteredTasks = filteredTasks.filter(
            task => task.completed
        )
    }

    ;

    taskList.innerHTML = "";

    if(filteredTasks.length === 0){
        taskList.innerHTML =

        `<p class="empty-message">

            No se encontraron tareas.

        </p>`;

        return;

    }

    filteredTasks.forEach((task, index) => {

        const overdue =
            task.dueDate && 
            !task.completed &&
            new Date(task.dueDate) < new Date();

        taskList.innerHTML += `

        <li class="task-item ${overdue ? "vencida" : ""}">

            <span
            class="${task.completed ? "completed" : ""}"
            data-index="${index}">

            ${task.text}
            ${getPriorityText(task.priority)}

            <div class="task-date">
            ${formatDate(task.dueDate)},
            </div>

            </span>

            <div>

                <button
                    class="complete-button"
                    data-index="${index}">

                    ${task.completed ? "↩" : "✔"}

                </button>

                <button
                    class="delete-button"
                    data-index="${index}">

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

    saveTasks();

}

function toggleTask(index){

    tasks[index].completed = !tasks[index].completed;

    renderTasks();

    saveTasks();

}

function handleEnterKey(event){

    if(event.key === "Enter"){

        addTask();

    }

}

function loadTasks() {

    const storedTasks = localStorage.getItem("tasks");

    if (!storedTasks) {

        return;

    }

    const parsedTasks = JSON.parse(storedTasks);

    parsedTasks.forEach(task=>{


    if(!task.priority){

        task.priority="medium";

    }


    tasks.push(task);

    if(!task.createdAt) {

        task.createdAt = new Date().toISOString();

    }
    
    if(!task.dueDate){

        task.dueDate = "";

    }


});

    renderTasks();

    updateCounter();

}

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

function handleTaskActions(event) {

    const button = event.target;

    const index = Number(button.dataset.index);

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

    const index = Number(event.target.dataset.index);

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

    renderTasks();

    saveTasks();

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
function testDOMCreation() {
    const li = document.createElement("li");
    li.textContent = "Soy una tarea creada con createElement()";
    taskList.appendChild(li);
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
function formatDate(date){
    if(!date){
        return "Sin fecha";
    }
    const formatted = new Date(date);
    return formatted.toLocaleDateString();
}
function isOverdue(task){
    if(!task.dueDate || task.completed){
        return false;
    }
    const today = new Date();
    const limitDate = new Date(task.dueDate);
    return limitDate < today;
}
// testDOMCreation();
loadTasks();