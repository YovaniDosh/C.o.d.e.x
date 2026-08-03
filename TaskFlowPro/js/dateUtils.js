import { MESSAGES } from "./constants.js";

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