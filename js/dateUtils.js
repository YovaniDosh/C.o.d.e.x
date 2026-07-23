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