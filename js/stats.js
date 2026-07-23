import { isOverdue } from "./ui.js";

export function calculateStats(tasks) {

    return tasks.reduce(

        (stats, task) => {

            stats.total++;

            if (task.completed) {

                stats.completed++;

            } else {

                stats.pending++;

            }

            if (isOverdue(task)) {

                stats.overdue++;

            }

            if (task.priority === "high") {

                stats.highPriority++;

            }

            return stats;

        },

        {
            total: 0,
            pending: 0,
            completed: 0,
            overdue: 0,
            highPriority: 0
        }

    );

}