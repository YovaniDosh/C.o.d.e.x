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
        exportTasksButton,
        importTasksInput,
        importTasksButton,
        importModal,
        cancelImportButton,
        confirmImportButton,
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
        handleExportTasks,
        openImportFilePicker,
        handleImportFile,
        confirmImportTasks,
        closeImportModal,
        handleImportModalClick,
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

    exportTasksButton.addEventListener(
        "click",
        handleExportTasks
    );

    importTasksButton.addEventListener(
        "click",
        openImportFilePicker
    );

    importTasksInput.addEventListener(
        "change",
        handleImportFile
    );

    cancelImportButton.addEventListener(
        "click",
        () => closeImportModal()
    );

    confirmImportButton.addEventListener(
        "click",
        confirmImportTasks
    );

    importModal.addEventListener(
        "click",
        handleImportModalClick
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