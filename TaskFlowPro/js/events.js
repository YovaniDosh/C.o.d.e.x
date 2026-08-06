export function registerEvents(
    elements,
    handlers
) {
    const {
        addTaskButton,
        taskInput,
        taskList,
        searchInput,
        filterButtons,
        sortSelect,
        themeToggle,
        cancelDeleteButton,
        confirmDeleteButton,
        deleteModal,
        editTaskForm,
        cancelEditButton
    } = elements;

    const {
        handleAddTask,
        handleEnterKey,
        handleTaskActions,
        refreshUI,
        changeFilter,
        changeSort,
        handleThemeToggle,
        closeDeleteModal,
        confirmDeleteTask,
        handleDeleteModalClick,
        handleModalEscape,
        handleEditSubmit,
        closeEditModal
    } = handlers;

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
        () => closeDeleteModal()
    );

    confirmDeleteButton.addEventListener(
        "click",
        confirmDeleteTask
    );

    deleteModal.addEventListener(
        "click",
        handleDeleteModalClick
    );

    editTaskForm.addEventListener(
        "submit",
        handleEditSubmit
    );

    cancelEditButton.addEventListener(
        "click",
        () => closeEditModal()
    );

    document.addEventListener(
        "keydown",
        handleModalEscape
    );
}