// ==============================================
// Funciones para filtrar y ordenar tareas.
// ==============================================

// ==============================================
// FILTROS
// ==============================================

import { FILTERS, SORT_OPTIONS } from "./constants.js";

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

export function sortTasks(tasks, sortOption) {

    switch (sortOption) {

        case SORT_OPTIONS.NAME:

            return sortByName(tasks);

        case SORT_OPTIONS.PRIORITY:

            return sortByPriority(tasks);

        case SORT_OPTIONS.DATE:

            return sortByDate(tasks);

        case SORT_OPTIONS.DEFAULT:

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
