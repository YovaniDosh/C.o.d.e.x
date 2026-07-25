# Changelog

Todos los cambios importantes de este proyecto serán documentados aquí.

El formato sigue la filosofía de **Keep a Changelog**.

## [0.4.0] - 2026-07-24

### Added

- Tema oscuro persistente.
- Botón para alternar entre tema claro y oscuro.
- Módulo `theme.js` para administrar la preferencia visual.
- Atributos de accesibilidad en el selector de tema.

### Changed

- Se separó la lógica del tema de `app.js`.
- Se eliminó código duplicado relacionado con el Dark Mode.
- Se mejoró la persistencia de tareas con `persistAndRefresh()`.
- Se optimizó la delegación de eventos en los botones de tareas.

---

## [0.3.0-dev]

### Added

* Dashboard de estadísticas.
* Ordenamiento por nombre.
* Ordenamiento por prioridad.
* Ordenamiento por fecha.
* Contador dinámico.
* Detección de tareas vencidas.
* Utilidades para manejo de fechas.
* Búsqueda ignorando mayúsculas.
* Búsqueda ignorando acentos.
* Refactorización completa de la arquitectura.

### Changed

* Separación del proyecto en módulos ES Modules.
* Refactorización del renderizado.
* Refactorización de estadísticas utilizando `reduce()`.
* Centralización de constantes.
* Mejora del rendimiento del buscador.

---

## [0.2.0-dev]

### Added

* Persistencia con LocalStorage.
* Prioridades.
* Fechas límite.
* Filtros.
* Edición de tareas.
* Eliminación de tareas.
* Restauración de tareas.

### Changed

* Mejor organización del código.
* Mejora de la interfaz.
* Refactorización inicial.

---

## [0.1.0]

### Added

* Proyecto inicial.
* HTML base.
* CSS inicial.
* Crear tareas.
* Completar tareas.
* Contador básico.
* Primer diseño de la interfaz.
