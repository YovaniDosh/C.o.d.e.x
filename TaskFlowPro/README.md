# ✅ TaskFlow Pro

> Un gestor de tareas moderno desarrollado con **HTML, CSS y JavaScript (ES Modules)**, construido siguiendo buenas prácticas de desarrollo Frontend, arquitectura modular y control de versiones con Git.

![Version](https://img.shields.io/badge/version-0.10.0-blue)
![Status](https://img.shields.io/badge/status-En%20desarrollo-orange)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📖 Descripción

TaskFlow Pro es mi primer proyecto profesional para GitHub.

El objetivo no es únicamente construir una aplicación funcional, sino desarrollar un proyecto siguiendo una metodología similar a la utilizada en equipos de desarrollo reales.

Durante el desarrollo se priorizan:

* Arquitectura modular.
* Código limpio.
* Mobile First.
* Responsive Design.
* Reutilización de código.
* Buenas prácticas con Git.
* Documentación profesional.

---

# ✨ Funcionalidades implementadas

Actualmente el proyecto incluye:

* ✅ Crear tareas
* ✅ Editar tareas
* ✅ Completar y restaurar tareas
* ✅ Eliminar tareas
* ✅ Prioridades
* ✅ Fechas límite
* ✅ Almacenamiento local con LocalStorage
* ✅ Búsqueda en tiempo real
* ✅ Búsqueda ignorando mayúsculas y acentos
* ✅ Filtros por estado
* ✅ Ordenamiento por nombre, prioridad y fecha
* ✅ Dashboard de estadísticas
* ✅ Detección automática de tareas vencidas
* ✅ Contador dinámico
* ✅ Tema claro y oscuro persistente
* ✅ Arquitectura modular
* ✅ Confirmación visual antes de eliminar tareas.
* ✅ Modal accesible y compatible con teclado
* ✅ Diseño responsive mobile-first
* ✅ Navegación accesible mediante teclado
* ✅ Ciclo de foco dentro de los modales
* ✅ Restauración del foco al cerrar los modales
* ✅ Soporte para reducción de movimiento
* ✅ Buscador optimizado mediante debounce
* ✅ Renderizado separado de tareas y estadísticas
* ✅ Exportación de tareas en formato JSON
* ✅ Respaldo de tareas con metadatos de exportación
- ✅ Importación de tareas desde respaldos JSON
- ✅ Validación de estructura y contenido durante la importación
- ✅ Detección de tareas e identificadores inválidos
- ✅ Confirmación antes de reemplazar las tareas actuales

---

# 🛠 Tecnologías

* HTML5
* CSS3
* JavaScript (ES Modules)
* LocalStorage API
* Git
* GitHub

---

# 📂 Estructura del proyecto

```text
TaskFlow-Pro/
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── constants.js
│   ├── dateUtils.js
│   ├── debounce.js
│   ├── events.js
│   ├── export.js
│   ├── import.js
│   ├── filters.js
│   ├── seed.js
│   ├── stats.js
│   ├── storage.js
│   ├── tasks.js
│   ├── theme.js
│   ├── toast.js
│   └── ui.js
│
├── docs/
│   ├── screenshots/
│   ├── architecture.md
│   ├── roadmap.md
│   └── project_rules.md
│
├── index.html
├── README.md
├── CHANGELOG.md
└── LICENSE
```

---

# 🏗 Arquitectura

El proyecto sigue una arquitectura modular.

| Archivo      | Responsabilidad      |
| ------------ | -------------------- |
| app.js       | Punto de entrada     |
| tasks.js     | Lógica de tareas     |
| ui.js        | Renderizado          |
| storage.js   | LocalStorage         |
| filters.js   | Filtros y búsqueda   |
| stats.js     | Dashboard            |
| dateUtils.js | Utilidades de fechas |
| constants.js | Configuración global |
| seed.js      | Datos de prueba      |
| toast.js     | Notificaciones temporales|
| events.js     | Registro centralizado de eventos |
| export.js | Generación y descarga de respaldos en formato JSON |
| import.js    | Lectura y validación de respaldos JSON             |
| theme.js      | Gestión del tema visual |

---

## Evolución del proyecto

- `v0.1.0` — Estructura inicial.
- `v0.2.0` — CRUD y persistencia.
- `v0.3.0` — Dashboard, estadísticas y ordenamiento.
- `v0.4.0` — Tema oscuro persistente y refactorización modular.
- `v0.5.0` — Modal personalizado para confirmar la eliminación de tareas.
- `v0.6.0` — Sistema de notificaciones Toast para informar acciones sin interrumpir al usuario.
- `v0.7.0` - Se agregó un botón visible para editar cada tarea.
- `v0.8.0` — Responsive mobile-first, modales accesibles y control completo del foco.
- `v0.9.0` — Optimización del buscador mediante debounce y renderizado selectivo de la interfaz.
- `v0.10.0` — Exportación de tareas y generación de respaldos en formato JSON.
- `v0.11.0` — Importación y validación de respaldos en formato JSON.

# 🚀 Instalación

Clona el repositorio.

```bash
git clone https://github.com/YovaniDosh/TaskFlow-Pro.git
```

Entra al proyecto.

```bash
cd taskflow-pro
```

Abre `index.html` o ejecuta Live Server desde Visual Studio Code.

---

# 📸 Capturas

Las capturas estarán disponibles en:

```text
docs/screenshots/
```

---

# 📅 Roadmap

## Completado

* Arquitectura modular
* Dashboard
* Filtros
* Ordenamiento
* LocalStorage
* Estadísticas
* Búsqueda avanzada
* Dark Mode
* Toast Notifications
* Modal de edición
* Accesibilidad de los modales
* Responsive mobile-first
* Optimización
* Exportación de tareas en formato JSON
* Importación de tareas desde respaldos JSON

---

# 📝 Historial de versiones

Consulta el archivo:

```text
CHANGELOG.md
```

---

# 🤝 Contribuciones

Actualmente este proyecto forma parte de mi proceso de aprendizaje y construcción de portafolio.

Las sugerencias y mejoras son bienvenidas.

---

# 📄 Licencia

Proyecto bajo licencia MIT.

---

# 👨‍💻 Autor

Desarrollado por **Maikool** como parte de su portafolio profesional de desarrollo web.
