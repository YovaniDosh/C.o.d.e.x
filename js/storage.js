// ======================================
// LOCAL STORAGE
// ======================================

const STORAGE_KEY = "taskflow-tasks";

/**
 * Guarda las tareas en LocalStorage
 * @param {Array} tasks
 */
export function saveTasks(tasks) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(tasks)
    );

}

/**
 * Obtiene las tareas guardadas
 * @returns {Array}
 */
export function loadTasks() {

    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
        return [];
    }

    try {

        const tasks = JSON.parse(data);

        return tasks.map(task => ({
            id: task.id ?? crypto.randomUUID(),
            completed: false,
            priority: "medium",
            createdAt: new Date().toISOString(),
            dueDate: "",
            ...task
        }));

    } catch (error) {

        console.error("Error al cargar las tareas:", error);

        return [];

    }

}