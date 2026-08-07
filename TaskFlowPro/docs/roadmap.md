# 🗺️ Roadmap — TaskFlow Pro

## 1. Visión del proyecto

TaskFlow Pro será un gestor de tareas moderno desarrollado con HTML, CSS y JavaScript mediante ES Modules.

El proyecto tendrá como objetivo construir una aplicación frontend completa, profesional y adecuada para un portafolio, aplicando una metodología de desarrollo progresiva basada en sprints.

Además de implementar las funcionalidades principales, se prestará especial atención a:

* Arquitectura modular.
* Código limpio y mantenible.
* Diseño mobile-first.
* Responsive design.
* Accesibilidad.
* Persistencia local.
* Optimización del rendimiento.
* Documentación progresiva.
* Uso profesional de Git y GitHub.

---

## 2. Objetivo general

Desarrollar una aplicación que permita administrar tareas de manera sencilla, visual y segura.

El usuario podrá:

* Crear tareas.
* Editarlas.
* Eliminarlas.
* Marcarlas como completadas.
* Restaurarlas.
* Asignar prioridades.
* Establecer fechas límite.
* Buscar y filtrar resultados.
* Consultar estadísticas.
* Cambiar entre tema claro y oscuro.
* Exportar e importar respaldos.

---

## 3. Tecnologías previstas

* HTML5.
* CSS3.
* JavaScript.
* JavaScript ES Modules.
* LocalStorage API.
* File API.
* Git.
* GitHub.
* GitHub Pages.

No se utilizarán frameworks ni librerías externas durante la construcción de la aplicación.

---

## 4. Metodología de trabajo

1. Definir el objetivo.
2. Identificar los archivos involucrados.
3. Implementar la funcionalidad.
5. Realizar pruebas manuales.
6. Corregir los errores encontrados.
7. Actualizar la documentación cuando corresponda.
8. Guardar una captura si existe un cambio visual relevante.
9. Crear un commit descriptivo.
10. Cerrar el sprint.

No se añadirá código experimental que no vaya a formar parte del resultado final. Cuando se necesiten datos de prueba, se utilizarán únicamente durante las pruebas y no permanecerán en la versión publicada.

---

# 5. Fase 1 - Plan de desarrollo

### Preparación del proyecto

**Objetivo:** crear la base inicial de TaskFlow Pro.

* Crear la estructura de carpetas.
* Crear `index.html`.
* Crear `css/style.css`.
* Crear `js/app.js`.
* Configurar Git.
* Crear `.gitignore`.
* Añadir la licencia MIT.
* Preparar el README inicial.

**Resultado esperado:** proyecto organizado y listo para comenzar el desarrollo.

---

### Interfaz principal

**Objetivo:** construir la estructura visual básica.

* Crear el encabezado.
* Crear el formulario de tareas.
* Crear la lista de tareas.
* Crear el contador.
* Aplicar estilos iniciales.
* Utilizar HTML semántico.

**Resultado esperado:** interfaz principal visible y organizada.

---

### Creación de tareas

**Objetivo:** permitir que el usuario agregue tareas.

* Capturar el contenido del formulario.
* Validar tareas vacías.
* Crear el modelo inicial de una tarea.
* Mostrar las tareas en pantalla.
* Limpiar el formulario después de guardar.

**Resultado esperado:** el usuario puede crear y visualizar tareas.

---

### Completar y restaurar tareas

**Objetivo:** administrar el estado de cada tarea.

* Marcar tareas como completadas.
* Restaurar tareas completadas.
* Mostrar visualmente el estado.
* Actualizar el contador.

**Resultado esperado:** las tareas pueden cambiar entre pendientes y completadas.

---

### Eliminar tareas

**Objetivo:** permitir la eliminación de tareas.


* Añadir una acción de eliminación.
* Identificar correctamente cada tarea.
* Actualizar la lista después de eliminar.
* Evitar acciones sobre tareas inexistentes.

**Resultado esperado:** el usuario puede eliminar tareas de la aplicación.

---

## Fase 2 — Persistencia y organización

### Identificadores únicos

**Objetivo:** proporcionar una identidad estable a cada tarea.

* Generar identificadores con `crypto.randomUUID()`.
* Utilizar los identificadores para localizar tareas.
* Evitar depender de la posición de cada elemento.

**Resultado esperado:** todas las tareas tienen un identificador único.

---

### Persistencia con LocalStorage

**Objetivo:** conservar las tareas al recargar la página.

* Crear el módulo `storage.js`.
* Guardar las tareas en LocalStorage.
* Recuperar las tareas al iniciar.
* Manejar datos inexistentes o inválidos.

**Resultado esperado:** las tareas permanecen almacenadas en el navegador.

---

### Prioridades

**Objetivo:** clasificar las tareas por importancia.

* Incorporar prioridades alta, media y baja.
* Añadir un selector al formulario.
* Mostrar la prioridad en cada tarjeta.
* Aplicar estilos diferenciados.

**Resultado esperado:** cada tarea puede tener una prioridad.

---

### Fechas límite

**Objetivo:** permitir la planificación temporal.

* Añadir un campo de fecha.
* Guardar la fecha límite.
* Mostrarla en la tarea.
* Manejar tareas sin fecha.

**Resultado esperado:** las tareas pueden incluir una fecha límite opcional.

---

### Utilidades de fecha

**Objetivo:** centralizar el tratamiento de fechas.

* Crear `dateUtils.js`.
* Formatear fechas para la interfaz.
* Comparar fechas de manera consistente.
* Evitar duplicación de lógica.

**Resultado esperado:** el manejo de fechas queda separado y reutilizable.

---

## Fase 3 — Búsqueda, filtros y ordenamiento

### Búsqueda en tiempo real

**Objetivo:** localizar tareas rápidamente.

* Crear un campo de búsqueda.
* Filtrar tareas mientras se escribe.
* Ignorar diferencias entre mayúsculas y minúsculas.
* Mostrar un estado vacío cuando no existan coincidencias.

**Resultado esperado:** la lista responde al texto buscado.

---

### Búsqueda sin acentos

**Objetivo:** mejorar la experiencia de búsqueda.

* Normalizar el texto.
* Ignorar signos diacríticos.
* Aplicar la normalización tanto a la consulta como a las tareas.

**Resultado esperado:** búsquedas como “documentacion” encuentran “documentación”.

---

### Filtros por estado

**Objetivo:** separar tareas pendientes y completadas.

* Crear los filtros Todas, Pendientes y Completadas.
* Mantener un filtro activo.
* Actualizar visualmente el botón seleccionado.
* Incorporar atributos accesibles.

**Resultado esperado:** el usuario puede cambiar entre grupos de tareas.

---

### Ordenamiento por nombre

**Objetivo:** ordenar las tareas alfabéticamente.

* Crear el selector de ordenamiento.
* Incorporar el orden por nombre.
* Mantener intacto el arreglo original cuando sea necesario.

**Resultado esperado:** las tareas pueden visualizarse en orden alfabético.

---

### Ordenamiento por prioridad

**Objetivo:** mostrar primero las tareas más importantes.

* Definir el peso de cada prioridad.
* Añadir la opción al selector.
* Ordenar alta, media y baja.

**Resultado esperado:** las tareas pueden organizarse por importancia.

---

### Ordenamiento por fecha

**Objetivo:** priorizar las tareas según su vencimiento.

* Ordenar las tareas por fecha límite.
* Manejar correctamente las tareas sin fecha.
* Conservar un comportamiento predecible.

**Resultado esperado:** las tareas más próximas pueden mostrarse primero.

---

## Fase 4 — Estadísticas y arquitectura modular

### Contador dinámico

**Objetivo:** informar la cantidad de tareas.

* Mostrar el total.
* Adaptar el texto singular y plural.
* Actualizar el contador con búsquedas y filtros.

**Resultado esperado:** la cantidad visible siempre coincide con la lista.

---

### Detección de tareas vencidas

**Objetivo:** identificar tareas pendientes fuera de plazo.

* Comparar la fecha límite con la fecha actual.
* Excluir tareas completadas.
* Añadir un estado visual de vencimiento.

**Resultado esperado:** las tareas vencidas se reconocen fácilmente.

---

### Dashboard de estadísticas

**Objetivo:** ofrecer un resumen general del trabajo.

* Crear `stats.js`.
* Calcular tareas totales.
* Calcular tareas pendientes.
* Calcular tareas completadas.
* Calcular tareas vencidas.
* Mostrar estadísticas por prioridad.

**Resultado esperado:** la aplicación presenta información actualizada del estado de las tareas.

---

### Separación de responsabilidades

**Objetivo:** mejorar la arquitectura del código.

* Crear `tasks.js` para la lógica de negocio.
* Crear `filters.js` para búsquedas, filtros y ordenamiento.
* Mantener la persistencia en `storage.js`.
* Reducir las responsabilidades de `app.js`.

**Resultado esperado:** cada módulo tiene una responsabilidad clara.

---

### Centralización de constantes

**Objetivo:** evitar valores dispersos en el código.

* Crear `constants.js`.
* Centralizar filtros.
* Centralizar prioridades.
* Centralizar mensajes.
* Centralizar opciones de ordenamiento.
* Centralizar la configuración de la aplicación.

**Resultado esperado:** las configuraciones importantes se administran desde un único módulo.

---

### Refactorización de la interfaz

**Objetivo:** separar el renderizado del control principal.

* Crear o completar `ui.js`.
* Centralizar la creación del HTML de las tareas.
* Separar el renderizado de estadísticas.
* Separar la actualización del contador.
* Reducir la manipulación directa del DOM desde `app.js`.

**Resultado esperado:** la interfaz puede actualizarse mediante funciones específicas.

---

## Fase 5 — Experiencia de usuario

### Tema claro y oscuro

**Objetivo:** permitir que el usuario elija la apariencia visual.

* Crear `theme.js`.
* Implementar exclusivamente los temas claro y oscuro.
* Guardar la preferencia.
* Recuperar el tema al iniciar.
* Actualizar los atributos accesibles del botón.

**Resultado esperado:** el tema seleccionado permanece después de recargar la página.

---

### Persistencia y actualización centralizadas

**Objetivo:** evitar código repetido después de modificar tareas.

* Centralizar el guardado.
* Centralizar la actualización de la interfaz.
* Revisar las operaciones de creación, edición, eliminación y cambio de estado.

**Resultado esperado:** todos los cambios se guardan y renderizan de forma consistente.

---

### Modal de confirmación

**Objetivo:** evitar eliminaciones accidentales.

* Crear un modal personalizado.
* Solicitar confirmación antes de eliminar.
* Permitir cancelar la operación.
* Permitir cerrar con Escape y con el fondo.
* Restaurar el foco.

**Resultado esperado:** ninguna tarea se elimina sin confirmación.

---

### Edición mediante botón visible

**Objetivo:** facilitar la edición en computadoras y dispositivos táctiles.

* Añadir un botón de edición.
* Evitar depender del doble clic.
* Preparar la tarea seleccionada.
* Mejorar las etiquetas accesibles.

**Resultado esperado:** todas las tareas cuentan con una acción de edición visible.

---

### Modal de edición

**Objetivo:** editar tareas mediante una interfaz accesible.

* Crear el formulario de edición.
* Cargar el texto actual.
* Validar el nuevo contenido.
* Guardar los cambios.
* Permitir cancelar.
* Gestionar correctamente el foco.

**Resultado esperado:** las tareas pueden editarse sin utilizar ventanas nativas del navegador.

---

### Notificaciones Toast

**Objetivo:** comunicar el resultado de las acciones sin interrumpir al usuario.

* Crear `toast.js`.
* Mostrar notificaciones de éxito, error e información.
* Añadir cierre automático.
* Añadir cierre manual.
* Limitar la cantidad de notificaciones visibles.
* Incorporar atributos ARIA.

**Resultado esperado:** las acciones principales ofrecen una respuesta visual clara.

---

## Fase 6 — Responsive y accesibilidad

### Diseño mobile-first

**Objetivo:** adaptar la aplicación inicialmente a pantallas pequeñas.

* Reorganizar el formulario.
* Adaptar filtros y controles.
* Mejorar el tamaño de los botones.
* Evitar desbordamientos.
* Mantener una jerarquía visual clara.

**Resultado esperado:** TaskFlow Pro funciona correctamente desde dispositivos móviles.

---

### Diseño responsive

**Objetivo:** adaptar progresivamente la interfaz a tabletas y escritorios.

* Incorporar puntos de quiebre.
* Reorganizar las tarjetas con CSS Grid.
* Ampliar el dashboard.
* Mejorar el aprovechamiento del espacio disponible.

**Resultado esperado:** la aplicación mantiene una presentación profesional en diferentes pantallas.

---

### Accesibilidad de interacción

**Objetivo:** permitir el uso completo mediante teclado.

* Revisar etiquetas y nombres accesibles.
* Añadir ciclos de foco en los modales.
* Gestionar Escape y Tab.
* Restaurar el foco al cerrar.
* Añadir soporte para movimiento reducido.
* Revisar estados de foco visibles.

**Resultado esperado:** las funciones principales pueden utilizarse sin ratón.

---

## Fase 7 — Rendimiento y respaldos

### Optimización del buscador

**Objetivo:** reducir renderizados innecesarios.

* Crear `debounce.js`.
* Aplicar un pequeño retardo a la búsqueda.
* Mantener filtros y ordenamiento inmediatos.
* Separar la actualización de tareas y estadísticas.

**Resultado esperado:** la búsqueda permanece fluida incluso con muchas tareas.

---

### Exportación de tareas

**Objetivo:** permitir la creación de copias de seguridad.

* Crear `export.js`.
* Generar un archivo JSON.
* Incluir tareas y metadatos.
* Descargar el respaldo desde el navegador.
* Informar el resultado mediante una notificación.

**Resultado esperado:** el usuario puede descargar una copia de sus tareas.

---

### Importación de tareas

**Objetivo:** restaurar tareas desde un respaldo JSON.

* Crear `import.js`.
* Leer archivos JSON.
* Validar la estructura del respaldo.
* Validar cada propiedad de las tareas.
* Detectar identificadores duplicados.
* Mostrar una confirmación antes de reemplazar datos.
* Guardar las tareas importadas.
* Informar errores mediante notificaciones.

**Resultado esperado:** el usuario puede recuperar respaldos válidos sin comprometer los datos actuales.

---

# 6. Versiones previstas

| Versión   | Alcance previsto                             |
| --------- | -------------------------------------------- |
| `v0.1.0`  | Estructura inicial y operaciones básicas     |
| `v0.2.0`  | Persistencia, prioridades, fechas y filtros  |
| `v0.3.0`  | Búsqueda, ordenamiento y estadísticas        |
| `v0.4.0`  | Tema claro/oscuro y refactorización modular  |
| `v0.5.0`  | Confirmación personalizada de eliminación    |
| `v0.6.0`  | Sistema de notificaciones Toast              |
| `v0.7.0`  | Acción visible para editar tareas            |
| `v0.8.0`  | Responsive, accesibilidad y gestión del foco |
| `v0.9.0`  | Optimización y renderizado selectivo         |
| `v0.10.0` | Exportación de respaldos JSON                |
| `v0.11.0` | Importación y validación de respaldos JSON   |
| `v1.0.0`  | Revisión, publicación y presentación final   |

---

# 7. Documentación progresiva

La documentación evolucionará junto con el código y no se dejará para el final.

Durante la codificación se deberá:

* Actualizar `README.md`.
* Registrar cambios en `CHANGELOG.md`.
* Mantener actualizado este roadmap.
* Documentar decisiones importantes de arquitectura.
* Guardar capturas de cambios visuales relevantes.
* Crear commits claros y descriptivos.

Las capturas se almacenarán en:

```text
docs/screenshots/
```

---

# 8. Pruebas previstas

Antes de considerar terminado el proyecto se comprobará:

* Creación de tareas.
* Validación de campos vacíos.
* Edición de tareas.
* Eliminación con confirmación.
* Cambio entre pendiente y completada.
* Prioridades.
* Fechas límite.
* Detección de vencimiento.
* Búsqueda con mayúsculas y acentos.
* Filtros.
* Ordenamiento.
* Estadísticas.
* Persistencia en LocalStorage.
* Tema claro y oscuro.
* Navegación mediante teclado.
* Comportamiento de los modales.
* Notificaciones Toast.
* Diseño móvil, tableta y escritorio.
* Exportación de respaldos.
* Importación de respaldos válidos.
* Rechazo de archivos inválidos.
* Ausencia de errores en la consola.

---

# 9. Publicación prevista

Cuando todas las fases estén completas se realizará:

* Revisión final del código.
* Eliminación de cualquier recurso temporal de prueba.
* Revisión del README.
* Revisión del CHANGELOG.
* Revisión de enlaces y capturas.
* Comprobación de accesibilidad.
* Validación responsive.
* Creación de la versión estable.
* Publicación en GitHub.
* Despliegue mediante GitHub Pages.
* Incorporación al portafolio profesional.

---

# 10. Criterios para finalizar el proyecto

TaskFlow Pro se considerará terminado cuando:

* Todas las funcionalidades previstas estén operativas.
* No existan errores en la consola.
* La aplicación funcione en móvil y escritorio.
* La navegación principal sea accesible mediante teclado.
* Los datos persistan correctamente.
* La importación y exportación funcionen de forma segura.
* No permanezca código temporal o de prueba.
* La documentación represente fielmente el producto.
* El repositorio esté limpio y organizado.
* La versión estable esté publicada en GitHub Pages.

Cuando todos estos criterios se cumplan, se realizará el cierre formal con la declaración:

> **✅ PROYECTO 1 TERMINADO — TASKFLOW PRO**


# Cierre

TaskFlow Pro cumplió su objetivo de servir como primer proyecto profesional del portafolio y como práctica integral de HTML, CSS, JavaScript modular, accesibilidad, responsive design, persistencia, documentación y Git.

> **✅ PROYECTO 1 TERMINADO — TASKFLOW PRO v1.0.0**

