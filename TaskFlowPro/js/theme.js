import { THEME } from "./constants.js";

/**
 * Comprueba si un tema es válido.
 *
 * @param {string | null} theme
 * @returns {boolean}
 */
function isValidTheme(theme) {

    return (
        theme === THEME.LIGHT
        ||
        theme === THEME.DARK
    );

}

/**
 * Obtiene el tema guardado.
 *
 * @returns {string}
 */
export function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            THEME.STORAGE_KEY
        );

    return isValidTheme(savedTheme)
        ? savedTheme
        : THEME.LIGHT;

}

/**
 * Guarda la preferencia del tema.
 *
 * @param {string} theme
 */
export function saveTheme(theme) {

    if (!isValidTheme(theme)) {

        return;

    }

    localStorage.setItem(
        THEME.STORAGE_KEY,
        theme
    );

}

/**
 * Aplica el tema a la interfaz.
 *
 * @param {string} theme
 * @param {HTMLButtonElement} themeToggle
 */
export function applyTheme(
    theme,
    themeToggle
) {

    const safeTheme =
        isValidTheme(theme)
            ? theme
            : THEME.LIGHT;

    document.documentElement.dataset.theme =
        safeTheme;

    const isDark =
        safeTheme === THEME.DARK;

    themeToggle.textContent =
        isDark ? "☀️" : "🌙";

    themeToggle.setAttribute(
        "aria-label",
        isDark
            ? "Activar tema claro"
            : "Activar tema oscuro"
    );

    themeToggle.setAttribute(
        "aria-pressed",
        String(isDark)
    );

}

/**
 * Devuelve el tema contrario.
 *
 * @param {string} currentTheme
 * @returns {string}
 */
export function toggleTheme(currentTheme) {

    return currentTheme === THEME.DARK
        ? THEME.LIGHT
        : THEME.DARK;

}