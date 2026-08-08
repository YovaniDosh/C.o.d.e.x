import { projects } from "./projects.js";

/* ========================================
   REFERENCIAS DEL DOM
======================================== */

const siteHeader = document.querySelector(".site-header");
const navigationToggle = document.querySelector("#navigationToggle");
const mainNavigation = document.querySelector("#mainNavigation");
const navigationLabel = navigationToggle?.querySelector(".sr-only");
const navigationLinks = mainNavigation?.querySelectorAll("a") ??[];
const projectsGrid = document.querySelector("#projectsGrid");
const currentYear = document.querySelector("#currentYear");
const desktopMediaQuery = window.matchMedia("(min-width: 48rem)");

/* ========================================
   UTILIDADES DEL DOM
======================================== */

function createElement(
    tagName,
    className = "",
    textContent = null
) {
    const element =
        document.createElement(tagName);

    if (className) {
        element.className = className;
    }

    if (textContent !== null) {
        element.textContent = textContent;
    }

    return element;
}

/* ========================================
   ENLACES DE PROYECTOS
======================================== */

function createProjectLink( url, text, accessibleLabel) {
    const link = createElement(
        "a",
        "project-card__link",
        text
    );

    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    link.setAttribute(
        "aria-label",
        accessibleLabel
    );

    return link;
}

/* ========================================
   TECNOLOGÍAS
======================================== */

function createTechnologyList(
    technologies
) {
    const list = createElement(
        "ul",
        "project-card__technologies"
    );

    list.setAttribute(
        "aria-label",
        "Tecnologías utilizadas"
    );

    technologies.forEach((technology) => {
        const item = createElement(
            "li",
            "",
            technology
        );

        list.append(item);
    });

    return list;
}

/* ========================================
   VISTA PREVIA
======================================== */

function createProjectVisual(project) {
    const visual = createElement(
        "div",
        "project-card__visual"
    );

    visual.setAttribute(
        "aria-hidden",
        "true"
    );

    const preview = createElement(
        "div",
        "project-preview"
    );

    const controls = createElement(
        "div",
        "project-preview__controls"
    );

    for (
        let index = 0;
        index < 3;
        index += 1
    ) {
        controls.append(
            createElement("span")
        );
    }

    const title = createElement(
        "strong",
        "project-preview__title",
        project.title
    );

    const lines = createElement(
        "div",
        "project-preview__lines"
    );

    lines.append(
        createElement("span"),
        createElement("span"),
        createElement("span")
    );

    preview.append(
        controls,
        title,
        lines
    );

    visual.append(preview);

    return visual;
}

/* ========================================
   TARJETA DE PROYECTO
======================================== */

function createProjectCard(project) {
    const article = createElement(
        "article",
        "project-card"
    );

    if (project.featured) {
        article.classList.add(
            "project-card--featured"
        );
    }

    article.dataset.projectId =
        project.id;

    const header = createElement(
        "div",
        "project-card__header"
    );

    header.append(
        createElement(
            "span",
            "project-card__number",
            `/${project.number}`
        ),
        createElement(
            "span",
            "project-card__status",
            project.status
        )
    );

    const content = createElement(
        "div",
        "project-card__content"
    );

    content.append(
        createElement(
            "h3",
            "project-card__title",
            project.title
        ),
        createElement(
            "p",
            "project-card__description",
            project.description
        ),
        createTechnologyList(
            project.technologies
        )
    );

    const links = createProjectLinks(
        project
    );

    if (links) {
        content.append(links);
    }

    article.append(header);

    if (project.featured) {
        article.append(
            createProjectVisual(project)
        );
    }

    article.append(content);

    return article;
}

function createProjectLinks(project) {
    if (
        !project.demoUrl &&
        !project.repositoryUrl
    ) {
        return null;
    }

    const links = createElement(
        "div",
        "project-card__links"
    );

    if (project.demoUrl) {
        links.append(
            createProjectLink(
                project.demoUrl,
                "Ver proyecto ↗",
                `Ver demostración de ${project.title}`
            )
        );
    }

    if (project.repositoryUrl) {
        links.append(
            createProjectLink(
                project.repositoryUrl,
                "GitHub ↗",
                `Ver código de ${project.title} en GitHub`
            )
        );
    }

    return links;
}

function renderProjects(projectList) {
    if (!projectsGrid) {
        return;
    }

    const fragment =
        document.createDocumentFragment();

    projectList.forEach((project) => {
        fragment.append(
            createProjectCard(project)
        );
    });

    projectsGrid.replaceChildren(
        fragment
    );
}

/* ========================================
   NAVEGACIÓN
======================================== */

function isNavigationOpen() {
    return (
        navigationToggle?.getAttribute(
            "aria-expanded"
        ) === "true"
    );
}

function setNavigationState(isOpen) {
    if (
        !navigationToggle ||
        !mainNavigation
    ) {
        return;
    }

    navigationToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    mainNavigation.classList.toggle(
        "main-navigation--open",
        isOpen
    );

    if (navigationLabel) {
        navigationLabel.textContent =
            isOpen
                ? "Cerrar menú de navegación"
                : "Abrir menú de navegación";
    }
}

function toggleNavigation() {
    setNavigationState(
        !isNavigationOpen()
    );
}

function closeNavigation() {
    setNavigationState(false);
}

/* ========================================
   HEADER Y FECHA
======================================== */

function updateHeaderState() {
    siteHeader?.classList.toggle(
        "site-header--scrolled",
        window.scrollY > 20
    );
}

function updateCurrentYear() {
    if (currentYear) {
        currentYear.textContent =
            new Date().getFullYear();
    }
}

/* ========================================
   EVENTOS
======================================== */

navigationToggle?.addEventListener(
    "click",
    toggleNavigation
);

navigationLinks.forEach((link) => {
    link.addEventListener(
        "click",
        closeNavigation
    );
});

document.addEventListener(
    "keydown",
    (event) => {
        if (
            event.key === "Escape" &&
            isNavigationOpen()
        ) {
            closeNavigation();
            navigationToggle?.focus();
        }
    }
);

window.addEventListener(
    "scroll",
    updateHeaderState,
    {
        passive: true
    }
);

desktopMediaQuery.addEventListener(
    "change",
    closeNavigation
);

/* ========================================
   INICIALIZACIÓN
======================================== */

renderProjects(projects);
updateCurrentYear();
updateHeaderState();