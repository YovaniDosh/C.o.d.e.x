import { projects } from "./projects.js";

const projectsGrid = document.querySelector("#projectsGrid");

function createElement( tagName, className, textContent) {
    const element = document.createElement(tagName);

    if (className) {
        element.className = className;
    }

    if (textContent) {
        element.textContent = textContent;
    }

    return element;
}

function createProjectLink( url, text, accessibleLabel) {
    const link = createElement( "a", "project-card__link", text);

    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute(
        "aria-label",
        accessibleLabel
    );

    return link;
}

function createTechnologyList(technologies) {
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
            null,
            technology
        );

        list.append(item);
    });

    return list;
}

function createProjectVisual(project) {
    const visual = createElement(
        "div",
        "project-card__visual"
    );

    visual.setAttribute(
        "aria-hidden",
        "true"
    );

    const windowElement = createElement(
        "div",
        "project-preview"
    );

    const controls = createElement(
        "div",
        "project-preview__controls"
    );

    for (let index = 0; index < 3; index += 1) {
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

    windowElement.append(
        controls,
        title,
        lines
    );

    visual.append(windowElement);

    return visual;
}

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

    article.dataset.projectId = project.id;

    const header = createElement(
        "div",
        "project-card__header"
    );

    const number = createElement(
        "span",
        "project-card__number",
        `/${project.number}`
    );

    const status = createElement(
        "span",
        "project-card__status",
        project.status
    );

    header.append(number, status);

    const content = createElement(
        "div",
        "project-card__content"
    );

    const title = createElement(
        "h3",
        "project-card__title",
        project.title
    );

    const description = createElement(
        "p",
        "project-card__description",
        project.description
    );

    const technologies =
        createTechnologyList(
            project.technologies
        );

    content.append(
        title,
        description,
        technologies
    );

    if (
        project.demoUrl ||
        project.repositoryUrl
    ) {
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

    projectsGrid.replaceChildren(fragment);
}

renderProjects(projects);