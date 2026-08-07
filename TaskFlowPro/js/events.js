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
        cancelEditButton,
        editModal
    } = elements;

    const {
        handleAddTask,
        handleEnterKey,
        handleTaskActions,
        handleSearchInput,
        changeFilter,
        changeSort,
        handleThemeToggle,
        closeDeleteModal,
        confirmDeleteTask,
        handleDeleteModalClick,
        handleEditModalClick,
        handleModalKeydown,
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
        handleSearchInput
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

    editModal.addEventListener(
        "click",
        handleEditModalClick
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
        handleModalKeydown
    );
}