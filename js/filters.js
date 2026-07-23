// ==============================================
// Funciones para filtrar y ordenar tareas.
// ==============================================

// ==============================================
// FILTROS
// ==============================================

import { FILTERS } from "./constants.js";

export const SORT_OPTIONS = {

    NAME: "name",

    PRIORITY: "priority",

    DATE: "date"

};

export function filterTasks(
    tasks,
    searchText,
    currentFilter
) {

    const text = searchText
        .trim()
        .toLowerCase();

    return tasks.filter(task => {

        const matchesSearch =

            task.text
                .toLowerCase()
                .includes(text);

        const isPending =
            !task.completed;

        const isCompleted =
            task.completed;

        const matchesFilter =

            currentFilter === FILTERS.ALL

            ||

            (
                currentFilter === FILTERS.PENDING

                &&

                isPending

            )

            ||

            (
                currentFilter === FILTERS.COMPLETED

                &&

                isCompleted

            );

        return (

            matchesSearch

            &&

            matchesFilter

        );

    });

}

// ==============================================
// ORDENACIONES
// ==============================================

export function sortByName(tasks) {

    return [...tasks].sort(

        (a, b) =>

        a.text.localeCompare(

            b.text,

            "es"

        )

    );

}

const PRIORITY_ORDER = {

    high: 3,

    medium: 2,

    low: 1

};

export function sortByPriority(tasks) {

    return [...tasks].sort(

        (a, b) =>

        PRIORITY_ORDER[b.priority]

        -

        PRIORITY_ORDER[a.priority]

    );

}

export function sortByDate(tasks) {

    return [...tasks].sort(

        (a, b) => {

            if (!a.dueDate)

                return 1;

            if (!b.dueDate)

                return -1;

            return (

                new Date(a.dueDate)

                -

                new Date(b.dueDate)

            );

        }

    );

}

export function sortTasks(tasks, sortOption)
{
    switch(sortOption)
    {
        case "name":
            
            return sortByName(tasks);
        
        case "priority":

            return sortByPriority(tasks);

        case "date":

            return sortByDate(tasks);

        default:

            return [...tasks];
    }
}


// ==============================================
// FUTURAS FUNCIONES
// ==============================================

// filterByCategory()

// filterByTag()

// filterByFavorite()

// filterByDateRange()

// sortByCreatedDate()

// sortAlphabeticallyDesc()

// sortByCustom()
