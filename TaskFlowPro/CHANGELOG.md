# Changelog

Todos los cambios importantes de este proyecto serán documentados aquí.

El formato sigue la filosofía de **Keep a Changelog**.

## [0.7.0]

### Added

- Se agregó un botón visible para editar cada tarea.
- Se eliminó la dependencia del doble clic.
- Se mejoró la compatibilidad con dispositivos táctiles.
- Se añadieron etiquetas accesibles a las acciones.

## [0.6.0]

### Added

- Sistema de notificaciones Toast para informar acciones sin interrumpir al usuario.
- Notificaciones al crear, editar, completar, restaurar y eliminar tareas.
- Notificaciones de error para campos vacíos.
- Botón para cerrar manualmente cada notificación.
- Barra visual de duración.
- Soporte para reducción de movimiento.
- Límite máximo de cuatro notificaciones activas.

### Changed

- Los mensajes de validación ya no utilizan `alert()`.
- Se mejoró la respuesta visual de las principales acciones.
- Se agregó limpieza automática de temporizadores.

## [0.5.0]

### Added

- Modal personalizado para confirmar la eliminación de tareas.
- Cierre del modal mediante botón, tecla Escape y clic en el fondo.
- Bloqueo del desplazamiento mientras el modal está abierto.
- Gestión del foco para mejorar la accesibilidad.

### Changed

- La eliminación de tareas ya no ocurre inmediatamente.
- Se separó la preparación de la eliminación de su confirmación.

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
