# Changelog

Todos los cambios importantes de este proyecto serán documentados aquí.

El formato sigue la filosofía de **Keep a Changelog**.

## [0.11.0]

### Added

- Módulo `import.js` para leer y validar respaldos JSON.
- Botón accesible para seleccionar archivos de importación.
- Modal de confirmación antes de reemplazar las tareas actuales.
- Importación de listas vacías y respaldos con una o varias tareas.
- Validación de la estructura general del respaldo.
- Validación de identificadores, texto, estado, prioridad y fechas.
- Detección de identificadores duplicados.
- Notificaciones Toast para informar errores y resultados.

### Changed

- El control centralizado de modales ahora incluye el modal de importación.

## [0.10.0]

### Added

- Módulo `export.js` para generar respaldos de las tareas.
- Botón accesible para exportar todas las tareas.
- Descarga de tareas en formato JSON.
- Metadatos de exportación con nombre de la aplicación, fecha y cantidad de tareas.
- Notificación Toast con el resultado de la exportación.

## [0.9.0]

### Added

- Módulo `debounce.js` para limitar la frecuencia de ejecución del buscador.
- Retardo de 300 ms en la búsqueda para evitar renderizados en cada pulsación.

### Changed

- Se separó el renderizado de tareas y estadísticas.
- Las búsquedas, los filtros y el ordenamiento solo actualizan la lista y el contador.
- Las estadísticas solo se recalculan cuando cambia el estado de las tareas.
- Los filtros y el ordenamiento conservan una respuesta inmediata.
- Se redujeron los cálculos y renderizados innecesarios.

## [0.8.0]

### Added

- Diseño responsive desarrollado con enfoque mobile-first.
- Ciclo de foco dentro de los modales de edición y eliminación.
- Restauración del foco al elemento que abrió cada modal.
- Soporte mejorado para navegación con teclado.
- Adaptaciones para usuarios que prefieren movimiento reducido.
- Módulo `events.js` para centralizar el registro de eventos.

### Changed

- Se reorganizaron el formulario, los filtros y el ordenamiento para dispositivos móviles.
- Las tarjetas de tareas ahora utilizan CSS Grid.
- Las estadísticas cambian progresivamente de una a tres columnas.
- Los controles de los modales se adaptan al ancho disponible.
- Se centralizó el control de la tecla Escape y Tab para ambos modales.
- Se mejoró el comportamiento de nombres de tareas extensos.
- Se eliminaron reglas CSS duplicadas o incompatibles con Grid.

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
