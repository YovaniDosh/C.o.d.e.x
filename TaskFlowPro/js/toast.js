const TOAST_DURATION = 3000;

const TOAST_TYPES = [
    "success",
    "error",
    "info"
];

const MAX_VISIBLE_TOASTS = 4;

const toastTimers =
    new WeakMap();

/**
 * Muestra una notificación temporal.
 *
 * @param {HTMLElement} container
 * @param {string} message
 * @param {"success" | "error" | "info"} type
 */
export function showToast(
    container,
    message,
    type = "success"
) {

    if (
        !container
        ||
        typeof message !== "string"
        ||
        !message.trim()
    ) {

        return;

    }

    const safeType =
        TOAST_TYPES.includes(type)
            ? type
            : "info";

    const toast =
        document.createElement("div");

    const messageElement =
        document.createElement("span");

    const closeButton =
        document.createElement("button");

    const progressBar =
        document.createElement("span");

    toast.className =
        `toast toast--${safeType}`;

    toast.setAttribute(
        "role",
        safeType === "error"
            ? "alert"
            : "status"
    );

    messageElement.className =
        "toast__message";

    messageElement.textContent =
        message.trim();

    closeButton.className =
        "toast__close";

    closeButton.type =
        "button";

    closeButton.textContent =
        "×";

    closeButton.setAttribute(
        "aria-label",
        "Cerrar notificación"
    );

    progressBar.className =
        "toast__progress";

    progressBar.setAttribute(
        "aria-hidden",
        "true"
    );

    toast.append(
        messageElement,
        closeButton,
        progressBar
    );

    container.append(toast);

    requestAnimationFrame(() => {

        toast.classList.add(
            "toast--visible"
        );

    });

    const timeoutId =
        setTimeout(
            () => removeToast(toast),
            TOAST_DURATION
        );

    toastTimers.set(
        toast,
        timeoutId
    );

    closeButton.addEventListener(
        "click",
        () => removeToast(toast)
    );

    limitVisibleToasts(container);

}

/**
 * Mantiene un máximo de notificaciones visibles.
 *
 * @param {HTMLElement} container
 */
function limitVisibleToasts(container) {

    const visibleToasts =
        container.querySelectorAll(
            ".toast:not(.toast--removing)"
        );

    if (
        visibleToasts.length
        <=
        MAX_VISIBLE_TOASTS
    ) {

        return;

    }

    removeToast(
        visibleToasts[0]
    );

}

/**
 * Retira una notificación y limpia su temporizador.
 *
 * @param {HTMLElement} toast
 */
function removeToast(toast) {

    if (!toast.isConnected) {

        return;

    }

    const timeoutId =
        toastTimers.get(toast);

    if (timeoutId) {

        clearTimeout(timeoutId);

        toastTimers.delete(toast);

    }

    toast.classList.add(
        "toast--removing"
    );

    toast.classList.remove(
        "toast--visible"
    );

    const removeElement = () => {

        if (toast.isConnected) {

            toast.remove();

        }

    };

    toast.addEventListener(
        "transitionend",
        removeElement,
        { once: true }
    );

    setTimeout(
        removeElement,
        300
    );

}