// ======================================
// Funciones relacionadas con la interfaz
// ======================================

import { MESSAGES, PRIORITY_LABELS, ICONS } from "./constants.js";
import { formatDate, isOverdue } from "./dateUtils.js";

export function getPriorityText(priority) {

    return (
        PRIORITY_LABELS[priority] ??
        PRIORITY_LABELS.medium
    );

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
export function updateCounter(
    taskCounter,
    visibleTasks,
    totalTasks
) {

    if (visibleTasks === totalTasks) {

        taskCounter.textContent =
            `${totalTasks} ${totalTasks === 1 ? "tarea" : "tareas"}`;

        return;

    }

    taskCounter.textContent =
        `Mostrando ${visibleTasks} de ${totalTasks} tareas`;

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

    const cards = [

        {
            label: "Total",
            value: stats.total
        },

        {
            label: "Pendientes",
            value: stats.pending
        },

        {
            label: "Completadas",
            value: stats.completed
        },

        {
            label: "Vencidas",
            value: stats.overdue
        },

        {
            label: "Alta prioridad",
            value: stats.highPriority
        }

    ];

    const cardsHTML = cards

        .map(card => `

            <article class="stat-card">

                <span>${card.label}</span>

                <strong>${card.value}</strong>

            </article>

        `)

        .join("");

    container.innerHTML = `

        <div class="stats-grid">

            ${cardsHTML}

        </div>

    `;

}