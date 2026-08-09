import { projects } from "./projects.js";

/* ========================================
   REFERENCIAS DEL DOM
======================================== */

const siteHeader = document.querySelector(".site-header");
const navigationToggle = document.querySelector("#navigationToggle");
const mainNavigation = document.querySelector("#mainNavigation");
const navigationLabel = navigationToggle?.querySelector(".sr-only");
const navigationLinks = mainNavigation?.querySelectorAll("a") ?? [];
const observedSections = [...document.querySelectorAll("#proyectos, #sobre-mi, #contacto")];
const projectsGrid = document.querySelector("#projectsGrid");
const currentYear = document.querySelector("#currentYear");
const desktopMediaQuery = window.matchMedia("(min-width: 48rem)");
const reducedMotionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const projectProgress = document.querySelector("#projectProgress");
const projectProgressBar = document.querySelector("#projectProgressBar");

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

const SVG_NAMESPACE =
    "http://www.w3.org/2000/svg";

function createSvgElement(
    tagName,
    attributes = {}
) {
    const element =
        document.createElementNS(
            SVG_NAMESPACE,
            tagName
        );

    Object.entries(attributes).forEach(
        ([attribute, value]) => {
            element.setAttribute(
                attribute,
                value
            );
        }
    );

    return element;
}

function createClipPath(
    id,
    points
) {
    const clipPath =
        createSvgElement(
            "clipPath",
            {
                id
            }
        );

    const polygon =
        createSvgElement(
            "polygon",
            {
                points
            }
        );

    clipPath.append(polygon);

    return clipPath;
}

function createSlashedTextLayer(
    projectTitle,
    className,
    textLength
) {
    const text =
        createSvgElement(
            "text",
            {
                class:
                    `slashed-logo__layer ${className}`,

                x: "500",
                y: "235",

                "text-anchor": "middle",

                textLength,
                lengthAdjust:
                    "spacingAndGlyphs"
            }
        );

    text.textContent =
        projectTitle;

    return text;
}

function createSlashedProjectTitle(
    project
) {
    const heading = createElement(
        "h3",
        "project-card__title"
    );

    const accessibleTitle =
        createElement(
            "span",
            "sr-only",
            project.title
        );

    const svg =
        createSvgElement(
            "svg",
            {
                class: "slashed-logo",

                viewBox:
                    "0 0 1000 360",

                preserveAspectRatio:
                    "xMidYMid meet",

                "aria-hidden": "true",

                focusable: "false"
            }
        );

    const topClipId =
        `slice-top-${project.id}`;

    const bottomClipId =
        `slice-bottom-${project.id}`;

    const definitions =
        createSvgElement("defs");

    definitions.append(
        createClipPath(
            topClipId,
            "0,0 1000,0 1000,180 0,220"
        ),

        createClipPath(
            bottomClipId,
            "0,220 1000,180 1000,360 0,360"
        )
    );

    const textLength = Math.min(
        860,
        Math.max(
            520,
            project.title.length * 58
        )
    );

    const shadow =
        createSlashedTextLayer(
            project.title,
            "slashed-logo__shadow",
            textLength
        );

    const topGroup =
        createSvgElement(
            "g",
            {
                "clip-path":
                    `url(#${topClipId})`
            }
        );

    topGroup.append(
        createSlashedTextLayer(
            project.title,
            "slashed-logo__top",
            textLength
        )
    );

    const bottomGroup =
        createSvgElement(
            "g",
            {
                "clip-path":
                    `url(#${bottomClipId})`
            }
        );

    bottomGroup.append(
        createSlashedTextLayer(
            project.title,
            "slashed-logo__bottom",
            textLength
        )
    );

    svg.append(
        definitions,
        shadow,
        topGroup,
        bottomGroup
    );

    heading.append(
        accessibleTitle,
        svg
    );

    return heading;
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
    createSlashedProjectTitle(
        project
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

function updateProjectDashboard() {
    const totalProjects =
        projects.length;

    const completedProjects =
        projects.filter(
            (project) =>
                project.completed
        ).length;

    if (projectProgress) {
        projectProgress.textContent =
            `${completedProjects}/${totalProjects}`;
    }

    if (projectProgressBar) {
        projectProgressBar.max =
            totalProjects;

        projectProgressBar.value =
            completedProjects;

        projectProgressBar.textContent =
            `${completedProjects} de ${totalProjects}`;
    }
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

function updateActiveNavigation(
    sectionId
) {
    navigationLinks.forEach((link) => {
        const isActive =
            link.getAttribute("href") ===
            `#${sectionId}`;

        if (isActive) {
            link.setAttribute(
                "aria-current",
                "page"
            );

            return;
        }

        link.removeAttribute(
            "aria-current"
        );
    });
}

function initializeSectionObserver() {
    if (
        !observedSections.length ||
        !("IntersectionObserver" in window)
    ) {
        return;
    }

    const observer =
        new IntersectionObserver(
            (entries) => {
                const visibleEntry =
            entries
                .filter(
                    (entry) =>
                        entry.isIntersecting
                )
                .sort(
                    (firstEntry, secondEntry) =>
                        secondEntry.intersectionRatio -
                        firstEntry.intersectionRatio
                )[0];

                if (!visibleEntry) {
                    return;
                }

                updateActiveNavigation(
                    visibleEntry.target.id
                );
            },
            {
            rootMargin:
                "-30% 0px -55% 0px",

            threshold: [
                0,
                0.25,
                0.5
            ]
        }
        );

    observedSections.forEach((section) => {
        observer.observe(section);
    });
}

function initializeRevealAnimations() {

    if (
        reducedMotionMediaQuery.matches ||
        !("IntersectionObserver" in window)
    ) {
        return;
    }

    const revealElements = [
        ...document.querySelectorAll(
            [
                ".projects-section__left",
                ".projects-section__right",
                ".project-card",
                ".about-section__content"
            ].join(", ")
        )
    ];

    if (!revealElements.length) {
        return;
    }

    document.documentElement.classList.add(
        "reveal-enabled"
    );
    let projectCardIndex = 0;

    revealElements.forEach((element) => {
        element.classList.add(
            "reveal"
        );

        if (
            element.classList.contains(
                "projects-section__left"
            )
        ) {
            element.classList.add(
                "reveal--left"
            );
        }

        if (
            element.classList.contains(
                "projects-section__right"
            )
        ) {
            element.classList.add(
                "reveal--right"
            );
        }

        if (
            element.classList.contains(
                "project-card"
            )
        ) {
            const delay =
                (projectCardIndex % 2) * 90;

            element.style.setProperty(
                "--reveal-delay",
                `${delay}ms`
            );

            projectCardIndex += 1;
        }
    });

    const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        "is-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );
                });
            },
            {
                rootMargin:
                    "0px 0px -10% 0px",

                threshold: 0.08
            }
        );

    revealElements.forEach((element) => {
        observer.observe(element);
    });
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
updateProjectDashboard();
initializeSectionObserver();
initializeRevealAnimations();