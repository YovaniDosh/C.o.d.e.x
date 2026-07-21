// ======================================
// TASKS
// Lógica de negocio de las tareas
// ======================================

import { CONFIG } from "./constants.js";

export function createTask(text, priority, dueDate) {

    return {

        id: crypto.randomUUID(),

        text,

        completed: false,

        priority: priority ?? CONFIG.DEFAULT_PRIORITY,

        createdAt: new Date().toISOString(),

        dueDate

    };

}
export function addTask(tasks, task) {

    tasks.push(task);

}
export function deleteTask(tasks, id) {

    const index = tasks.findIndex(

        task => task.id === id

    );

    if (index !== -1) {

        tasks.splice(index, 1);

    }

}
export function toggleTask(tasks, id) {

    const task = tasks.find(

        task => task.id === id

    );

    if (task) {

        task.completed = !task.completed;

    }

}
export function updateTaskText(tasks, id, newText) {

    const task = tasks.find(

        task => task.id === id

    );

    if (task) {

        task.text = newText;

    }

}
export function findTaskIndex(tasks, id) {

    return tasks.findIndex(

        task => task.id === id

    );

}