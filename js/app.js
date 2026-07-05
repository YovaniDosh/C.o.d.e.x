const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");
const tasks = [];
addTaskButton.addEventListener("click", addTask);
function addTask() {

    const taskText = taskInput.value;
        if (taskText.trim() === "") {

        alert("Debes escribir una tarea.");

        return;
    }
    console.log(taskText);

}