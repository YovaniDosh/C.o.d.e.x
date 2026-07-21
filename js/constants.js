// ==============================================
// Constantes globales de la aplicación y configuraciones compartidas.
// ==============================================

// ==============================================
// FILTROS
// ==============================================

export const APP = {

    NAME: "TaskFlow Pro",

    VERSION: "0.2.0-dev"

};

export const FILTERS = {

    ALL: "all",

    PENDING: "pending",

    COMPLETED: "completed"

};

export const PRIORITIES = {

    HIGH: "high",

    MEDIUM: "medium",

    LOW: "low"

};

export const MESSAGES = {

    EMPTY_TASK:
        "Debes escribir una tarea.",

    NO_TASKS:
        "No se encontraron tareas.",

    NO_DATE:
        "Sin fecha"

};

export const PRIORITY_LABELS = {

    high: "Alta",

    medium: "Media",

    low: "Baja"

};

export const ICONS = {

    COMPLETE: "✔",

    RESTORE: "↩",

    DELETE: "🗑"

};

export const SORT_OPTIONS = {

    NAME: "name",

    PRIORITY: "priority",

    DATE: "date"

};

export const CONFIG = {

    DEFAULT_PRIORITY: PRIORITIES.MEDIUM,

    STORAGE_KEY: "taskflow-tasks"

};

export const THEME = {

    LIGHT: "light",

    DARK: "dark"

};