// ======================================
// Funciones relacionadas con la interfaz
// ======================================

import { MESSAGES, PRIORITY_LABELS, ICONS } from "./constants.js";

export function getPriorityText(priority) {

    return (
        PRIORITY_LABELS[priority] ??
        PRIORITY_LABELS.medium
    );

}
export function formatDate(date) {

    if (!date) {

        return MESSAGES.NO_DATE;

    }

    return new Date(date).toLocaleDateString(
        "es-ES",
        {

            day: "2-digit",

            month: "2-digit",

            year: "numeric"

        }
    );

}
export function isOverdue(task) {

    if (!task.dueDate || task.completed) {

        return false;

    }

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const dueDate = new Date(task.dueDate);

    dueDate.setHours(0, 0, 0, 0);

    return dueDate < today;

}
export function createTaskHTML(task) {

    return `

        <li class="task-item ${isOverdue(task) ? "overdue" : ""}">

            <div class="task-content">

                <span
                
                    class="${task.completed ? "completed" : ""}"
                    data-id="${task.id}">

                    ${task.text}

                </span>

                <span class="priority ${task.priority}">

                    ${getPriorityText(task.priority)}

                </span>

                <div class="task-date">

                    ${formatDate(task.dueDate)}

                </div>

            </div>

            <div>

                <button

                    class="complete-button"

                    data-id="${task.id}">

                    ${task.completed ? ICONS.RESTORE : ICONS.COMPLETE}

                </button>

                <button

                    class="delete-button"

                    data-id="${task.id}">

                    ${ICONS.DELETE}

                </button>

            </div>

        </li>

    `;

}
export function renderTasks(taskList, tasks) {

    taskList.innerHTML = "";

    if (!tasks.length) {

        taskList.innerHTML = `

            <p class="empty-message">

                ${MESSAGES.NO_TASKS}

            </p>

        `;

        return;

    }

    taskList.innerHTML = tasks

        .map(task => createTaskHTML(task))

        .join("");

}
export function updateCounter(taskCounter, totalTasks) {

    taskCounter.textContent =

        `${totalTasks} ${totalTasks === 1 ? "tarea" : "tareas"}`;

}
export function updateActiveFilter(filterButtons, currentFilter) {

    filterButtons.forEach(button =>

        button.classList.remove("active")

    );

    document

        .querySelector(

            `[data-filter="${currentFilter}"]`

        )

        ?.classList.add("active");

}
export function renderStats(container, stats) {
    
    container.innerHTML = `
        <p><strong>Total:</strong> ${stats.total}</p>

        <p><strong>Pendientes:</strong> ${stats.pending}</p>

        <p><strong>Completadas:</strong> ${stats.completed}</p>

        <p><strong>Vencidas:</strong> ${stats.overdue}</p>

        <p><strong>Alta prioridad:</strong> ${stats.highPriority}</p>
    `;
}