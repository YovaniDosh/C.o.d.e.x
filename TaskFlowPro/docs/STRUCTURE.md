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
│   ├── events.js           ← ⏳ Registro centralizado de eventos
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
