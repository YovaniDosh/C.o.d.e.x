# 📁 Estructura del Proyecto - TaskFlow Pro

```
taskflow-pro/
│
├── index.html              ← Página principal (HTML semántico)
│
├── css/
│   └── style.css           ← Estilos con variables CSS + tema oscuro
│
├── js/
│   ├── app.js              ← 🚀 Punto de entrada (orquestador)
│   ├── constants.js        ← 📌 Constantes globales (filtros, prioridades, etc.)
│   ├── dateUtils.js        ← 📅 Utilidades de fecha (formatear, vencimiento)
│   ├── events.js           ← ⏳ (Pendiente) Centralización de eventos
│   ├── filters.js          ← 🔍 Filtrado y ordenamiento de tareas
│   ├── seed.js             ← 🌱 Generador de datos de prueba (100 tareas)
│   ├── stats.js            ← 📊 Cálculo de estadísticas
│   ├── storage.js          ← 💾 Persistencia en localStorage
│   ├── tasks.js            ← ✅ Lógica de negocio de tareas (CRUD)
│   ├── theme.js            ← 🌗 Modo oscuro / claro
│   └── ui.js               ← 🖥️ Renderizado del DOM
│
├── assets/                 ← (Carpeta para recursos adicionales)
│
├── docs/
│   ├── project_rules.md
│   └── screenshots/        ← Capturas de pantalla del proyecto
│
├── .gitignore
├── CHANGELOG.md
└── README.md
```

---

## 🔗 Diagrama de Dependencias (Flujo de Importación)

```
app.js  ←  entry point
  │
  ├── constants.js     →  Filtrs, SORT_OPTIONS, CONFIG, THEME, MESSAGES, ICONS
  ├── storage.js       →  saveTasks(), loadTasks()
  ├── tasks.js         →  createTask(), addTask(), deleteTask(), toggleTask()
  ├── filters.js       →  filterTasks(), sortTasks()
  ├── dateUtils.js     →  formatDate(), isOverdue()
  ├── stats.js         →  calculateStats()
  ├── ui.js            →  renderTasks(), renderStats(), updateCounter()
  ├── theme.js         →  applyTheme(), toggleTheme(), loadTheme(), saveTheme()
  └── seed.js          →  seedTasks()
```

---

## 🧩 Módulos y sus Responsabilidades

| Archivo           | Responsabilidad                                  | ¿Toca el DOM? | ¿Usa localStorage? |
|-------------------|--------------------------------------------------|:---:|:---:|
| `constants.js`    | Valores fijos (filtros, prioridades, mensajes)   | ❌  | ❌  |
| `storage.js`      | Leer/escribir tareas en localStorage             | ❌  | ✅  |
| `tasks.js`        | Lógica CRUD de tareas (crear, eliminar, editar)  | ❌  | ❌  |
| `filters.js`      | Filtrar y ordenar arrays                         | ❌  | ❌  |
| `dateUtils.js`    | Formatear fechas y detectar vencidas             | ❌  | ❌  |
| `stats.js`        | Calcular estadísticas (total, pendientes, etc.)  | ❌  | ❌  |
| `ui.js`           | Renderizar HTML dinámicamente                    | ✅  | ❌  |
| `theme.js`        | Cambiar entre modo claro/oscuro                  | ✅  | ✅  |
| `seed.js`         | Generar datos de relleno automáticos             | ❌  | ✅  |
| `app.js`          | Orquestar todo: eventos + estado global          | ✅  | ✅  |

---

## 🔄 Ciclo de Vida de una Acción (ej: Agregar Tarea)

```
1. Usuario hace clic en "Agregar"
       │
       ▼
2. app.js: handleAddTask()
       │
       ├── Obtiene texto, prioridad, fecha del formulario
       │
       ▼
3. tasks.js: createTask(texto, prioridad, fecha)
       │
       ├── Crea objeto: { id, text, completed, priority, createdAt, dueDate }
       │
       ▼
4. tasks.js: addTask(tasks, task)
       │
       ├── Añade al array de tareas
       │
       ▼
5. storage.js: saveTasks(tasks)
       │
       ├── Guarda en localStorage
       │
       ▼
6. app.js: refreshUI()
       │
       ├── filters.js: filterTasks()    ← filtra por búsqueda y estado
       ├── filters.js: sortTasks()      ← ordena según opción seleccionada
       ├── ui.js: renderTasks()         ← pinta las tareas en el DOM
       ├── ui.js: updateCounter()       ← actualiza contador
       └── ui.js: renderStats()         ← actualiza estadísticas
```

---

## 💡 Cómo usar este diagrama

1. **Para entender el proyecto**: Sigue las flechas de `app.js` hacia los módulos
2. **Para añadir funcionalidad**: Crea un nuevo archivo en `js/` e impórtalo en `app.js`
3. **Para debuggear**: Identifica qué capa falla (DOM → `ui.js`, datos → `storage.js`, lógica → `tasks.js`)

