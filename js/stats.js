export function calculateStats(tasks){
    return {

        total: tasks.length,

        pending: tasks.filter(task => !task.completed).length,

        completed: tasks.filter(task => task.completed).length,

        overdue: tasks.filter(
            task =>
                task.dueDate &&
                !task.completed &&
                new Date(task.dueDate) < new Date()
        ).length,

        highPriority: tasks.filter(
            task => task.priority === "high"
        ).length

    };
}