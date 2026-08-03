// ======================================
// LOCAL STORAGE
// ======================================

import { CONFIG, FILTERS } from "./constants.js";



export function saveTasks(tasks) {

    localStorage.setItem(CONFIG.STORAGE_KEY,JSON.stringify(tasks)
    );

}
 /**
 * Obtiene las tareas guardadas
 * @returns {Array}
 */
export function loadTasks() {

    const data = localStorage.getItem(CONFIG.STORAGE_KEY);

    if (!data) {

        return [];

    }

    try {

        const tasks = JSON.parse(data);

        return tasks.map(task => ({

            id: task.id ?? crypto.randomUUID(),

            text: task.text ?? "",

            completed: task.completed ?? false,

            priority: task.priority ?? "medium",

            createdAt:
                task.createdAt ??
                new Date().toISOString(),

            dueDate:
                task.dueDate ??
                ""

        }));

    } catch (error) {

        console.error("Error al cargar las tareas:", error);

        return [];

    }

}