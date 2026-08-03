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
const deleteModal = document.getElementById("deleteModal");
const deleteModalMessage = document.getElementById("deleteModalMessage");
const cancelDeleteButton = document.getElementById("cancelDeleteButton");
const confirmDeleteButton = document.getElementById("confirmDeleteButton");

// ===============================
// ESTADO DE LA APLICACIÓN
// ===============================

let tasks = loadTasks();
let currentFilter = FILTERS.ALL;
let currentSort = SORT_OPTIONS.DEFAULT;
let currentTheme = loadTheme();
let taskIdToDelete = null;
let deleteTriggerButton = null;
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

    cancelDeleteButton.addEventListener(
        "click",
        closeDeleteModal
    );

    confirmDeleteButton.addEventListener(
        "click",
        confirmDeleteTask
    );

    deleteModal.addEventListener(
        "click",
        handleDeleteModalClick
    );

    document.addEventListener(
        "keydown",
        handleModalEscape
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

        handleDeleteTask(
            id,
            button
        );

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

function handleDeleteTask(
    id,
    triggerButton
)
{
    const index = findTaskIndex(tasks, id);

    if(index === -1)
    {
        return;
    }

    taskIdToDelete = id;

    deleteTriggerButton =
        triggerButton;

    deleteModalMessage.textContent =
        `¿Deseas eliminar la tarea "${tasks[index].text}"?`;

    openDeleteModal();
}

function openDeleteModal() {

    deleteModal.classList.add(
        "open"
    );

    deleteModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

    confirmDeleteButton.focus();

}

function closeDeleteModal(
    restoreFocus = true
) {

    deleteModal.classList.remove(
        "open"
    );

    deleteModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

    if (
        restoreFocus
        &&
        deleteTriggerButton
    ) {

        deleteTriggerButton.focus();

    }

    taskIdToDelete = null;

    deleteTriggerButton = null;

}

function confirmDeleteTask() {

    if (!taskIdToDelete) {

        return;

    }

    const idToDelete =
        taskIdToDelete;

    confirmDeleteButton.disabled =
        true;

    deleteTask(
        tasks,
        idToDelete
    );

    closeDeleteModal();

    persistAndRefresh();

    confirmDeleteButton.disabled =
        false;
    
    taskInput.focus();

}

function handleDeleteModalClick(event)
{
    if(
        event.target.hasAttribute(
            "data-close-modal"
        )
    ){
        closeDeleteModal();
    }
}

function handleModalEscape(event)
{
    if(
        event.key === "Escape"
        &&
        deleteModal.classList.contains(
            "open"
        )
    ){
        closeDeleteModal();
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