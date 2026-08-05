// Punto de entrada de la aplicación

import { saveTasks, loadTasks } from "./storage.js";
import { CONFIG,FILTERS, MESSAGES,SORT_OPTIONS } from "./constants.js";
import { renderTasks, updateCounter, updateActiveFilter,renderStats } from "./ui.js";
import { filterTasks, sortTasks } from "./filters.js";
import { createTask, addTask, deleteTask, toggleTask, updateTaskText, findTaskIndex } from "./tasks.js";
import { applyTheme, loadTheme, saveTheme, toggleTheme} from "./theme.js";
import { calculateStats } from "./stats.js";
import { seedTasks } from "./seed.js";
import { showToast } from "./toast.js";

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
const toastContainer = document.getElementById("toastContainer");
const editModal = document.getElementById("editModal");
const editTaskForm = document.getElementById("editTaskForm");
const editTaskInput = document.getElementById("editTaskInput");
const cancelEditButton = document.getElementById("cancelEditButton");
const saveEditButton = document.getElementById("saveEditButton");

// ===============================
// ESTADO DE LA APLICACIÓN
// ===============================

let tasks = loadTasks();
let currentFilter = FILTERS.ALL;
let currentSort = SORT_OPTIONS.DEFAULT;
let currentTheme = loadTheme();
let taskIdToDelete = null;
let taskIdToEdit = null;
let editTriggerElement = null;
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

    editTaskForm.addEventListener(
        "submit",
        handleEditSubmit
    )

    cancelEditButton.addEventListener(
        "click",
        () => closeEditModal()
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

        notify(
            MESSAGES.EMPTY_TASK,
            "error"
        );

        taskInput.focus();

        return;

    }

    const task = createTask(

        taskText,

        prioritySelect.value,

        dateInput.value

    );

    addTask(tasks, task);

    persistAndRefresh();

    notify(
        "Tarea creada correctamente."
    );

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
            "complete-button"
        )
    ) {

        handleToggleTask(id);

        return;
    }

    if (
        button.classList.contains(
            "edit-button"
        )
    ) {

        openEditModal(
            id,
            button
        );

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
    }

}

function handleToggleTask(id)
{
    const index = findTaskIndex(tasks, id);

    if(index === -1)
    {
        return;
    }
    const wasCompleted = tasks[index].completed;
    const taskText = tasks[index].text;

    toggleTask(tasks, id);

    persistAndRefresh();

    notify(
        wasCompleted
            ? `Tarea "${taskText}" restaurada.`
            : `Tarea "${taskText}" completada.`
    );
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

    const index =
        findTaskIndex(
            tasks,
            idToDelete
        );

    if (index === -1) {

        closeDeleteModal(false);

        return;

    }

    const deletedTaskText =
        tasks[index].text;

    confirmDeleteButton.disabled =
        true;

    deleteTask(
        tasks,
        idToDelete
    );

    closeDeleteModal(false);

    persistAndRefresh();

    confirmDeleteButton.disabled =
        false;

    notify(
        `Tarea "${deletedTaskText}" eliminada.`,
        "info"
    );

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

function closeEditModal(
    restoreFocus = true
) {

    editModal.classList.remove(
        "open"
    );

    editModal.hidden = true;

    document.body.classList.remove(
        "modal-open"
    );

    editTaskForm.reset();

    taskIdToEdit = null;

    if (
        restoreFocus
        &&
        editTriggerElement?.isConnected
    ) {
        editTriggerElement.focus();
    }

    editTriggerElement = null;

}

function openEditModal(
    id,
    triggerElement
) {

    const index =
        findTaskIndex(tasks, id);

    if (index === -1) {
        return;
    }

    taskIdToEdit = id;
    editTriggerElement = triggerElement;

    editTaskInput.value =
        tasks[index].text;

    editModal.hidden = false;

    editModal.classList.add(
        "open"
    );

    document.body.classList.add(
        "modal-open"
    );

    requestAnimationFrame(() => {

        editTaskInput.focus();
        editTaskInput.select();

    });

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

function notify(
    message,
    type = "success"
) {

    showToast(
        toastContainer,
        message,
        type
    );

}

function handleEditSubmit(event) {

    event.preventDefault();

    if (!taskIdToEdit) {

        return;

    }

    const index =
        findTaskIndex(
            tasks,
            taskIdToEdit
        );

    if (index === -1) {

        closeEditModal(false);

        notify(
            "La tarea ya no está disponible.",
            "error"
        );

        return;

    }

    const normalizedText =
        editTaskInput.value.trim();

    if (!normalizedText) {

        notify(
            MESSAGES.EMPTY_TASK,
            "error"
        );

        editTaskInput.focus();

        return;

    }

    const previousText =
        tasks[index].text;

    if (
        normalizedText
        ===
        previousText
    ) {

        notify(
            "No se realizaron cambios.",
            "info"
        );

        editTaskInput.focus();

        return;

    }

    saveEditButton.disabled = true;

    updateTaskText(
        tasks,
        taskIdToEdit,
        normalizedText
    );

    closeEditModal(false);

    persistAndRefresh();

    saveEditButton.disabled = false;

    notify(
        `Tarea "${previousText}" actualizada correctamente.`
    );

    taskInput.focus();

}