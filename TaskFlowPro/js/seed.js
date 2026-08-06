import { CONFIG } from "./constants.js";
//==================================================
// CONFIGURACIÓN
//==================================================

const SEED_CONFIG = {
    TASK_COUNT: 100,
    COMPLETED_PERCENTAGE: 30,
    CREATED_DAYS_RANGE: 60,
    DUE_DATE_PAST_DAYS: 20,
    DUE_DATE_FUTURE_DAYS: 40
};

const PRIORITY_DISTRIBUTION = {
    HIGH_LIMIT: 20,
    MEDIUM_LIMIT: 85
};


const TASKS = [

    //==================================================
    // PROGRAMACIÓN
    //==================================================

    "Actualizar README",
    "Corregir bug del formulario",
    "Optimizar CSS",
    "Optimizar HTML",
    "Optimizar JavaScript",
    "Refactorizar app.js",
    "Refactorizar ui.js",
    "Refactorizar storage.js",
    "Refactorizar filters.js",
    "Refactorizar tasks.js",
    "Implementar modo oscuro",
    "Agregar validaciones al formulario",
    "Mejorar accesibilidad",
    "Optimizar rendimiento",
    "Optimizar LocalStorage",
    "Eliminar código duplicado",
    "Revisar consola del navegador",
    "Corregir errores de ESLint",
    "Actualizar dependencias",
    "Crear archivo CHANGELOG",
    "Actualizar documentación",
    "Crear documentación del proyecto",
    "Agregar comentarios necesarios",
    "Eliminar comentarios innecesarios",
    "Crear componente Modal",
    "Crear componente Toast",
    "Crear componente Spinner",
    "Crear componente Card",
    "Crear componente Header",
    "Crear componente Footer",
    "Diseñar página Login",
    "Diseñar Dashboard",
    "Diseñar pantalla Configuración",
    "Diseñar página Perfil",
    "Mejorar diseño responsive",
    "Corregir estilos móviles",
    "Optimizar navegación",
    "Mejorar experiencia de usuario",
    "Actualizar iconos",
    "Optimizar imágenes",
    "Crear repositorio Git",
    "Realizar commit de cambios",
    "Crear nueva rama",
    "Fusionar Pull Request",
    "Resolver conflictos de Git",
    "Actualizar versión del proyecto",
    "Preparar versión estable",
    "Realizar pruebas manuales",
    "Crear pruebas unitarias",
    "Preparar despliegue",

    //==================================================
    // TRABAJO / OFICINA
    //==================================================

    "Revisar correos pendientes",
    "Responder correos importantes",
    "Enviar presupuesto al cliente",
    "Preparar reunión semanal",
    "Asistir a reunión de equipo",
    "Actualizar informe mensual",
    "Organizar agenda del día",
    "Planificar objetivos de la semana",
    "Confirmar cita con el cliente",
    "Llamar al proveedor",

    "Revisar facturas",
    "Emitir factura",
    "Registrar gastos",
    "Registrar ingresos",
    "Actualizar base de datos",
    "Revisar contratos",
    "Preparar documentación",
    "Archivar documentos",
    "Imprimir documentos importantes",
    "Escanear documentos",
    "Crear presentación",
    "Actualizar presentación",
    "Preparar propuesta comercial",
    "Revisar propuesta enviada",
    "Enviar informe semanal",
    "Preparar reporte de ventas",
    "Revisar métricas del negocio",
    "Actualizar lista de clientes",
    "Contactar nuevo cliente",
    "Realizar seguimiento a clientes",
    "Programar reunión con el equipo",
    "Revisar calendario",
    "Organizar escritorio de trabajo",
    "Respaldar archivos importantes",
    "Actualizar inventario",
    "Verificar stock disponible",
    "Solicitar materiales",
    "Comparar precios de proveedores",
    "Actualizar lista de tareas",
    "Planificar próxima semana",
    "Responder mensajes pendientes",
    "Preparar videollamada",
    "Revisar objetivos del mes",
    "Organizar carpeta de documentos",
    "Actualizar hoja de cálculo",
    "Revisar pagos pendientes",
    "Preparar cierre del día",
    "Enviar recordatorio al cliente",
    "Actualizar estado del proyecto",
    "Revisar prioridades del día",

    //==================================================
    // HOGAR
    //==================================================

    "Tender la cama",
    "Limpiar la cocina",
    "Lavar los platos",
    "Guardar los platos",
    "Limpiar el refrigerador",
    "Sacar la basura",
    "Cambiar la bolsa de basura",
    "Barrer la casa",
    "Trapear el piso",
    "Limpiar las ventanas",
    "Quitar el polvo de los muebles",
    "Ordenar la habitación",
    "Organizar el escritorio",
    "Limpiar el baño",
    "Lavar el lavabo",
    "Limpiar el espejo",
    "Lavar las toallas",
    "Cambiar las sábanas",
    "Doblar la ropa",
    "Guardar la ropa limpia",
    "Poner la lavadora",
    "Tender la ropa",
    "Planchar la ropa",
    "Organizar el armario",
    "Regar las plantas",
    "Podar las plantas",
    "Alimentar a la mascota",
    "Cambiar el agua de la mascota",
    "Limpiar la cama de la mascota",
    "Lavar los recipientes de la mascota",
    "Revisar focos de la casa",
    "Cambiar un foco quemado",
    "Revisar las cerraduras",
    "Organizar la despensa",
    "Limpiar el horno",
    "Limpiar el microondas",
    "Aspirar la casa",
    "Ventilar las habitaciones",
    "Ordenar el garaje",
    "Preparar la lista de compras",

    //==================================================
    // COMPRAS
    //==================================================

    "Comprar frutas",
    "Comprar verduras",
    "Comprar pan",
    "Comprar leche",
    "Comprar huevos",
    "Comprar arroz",
    "Comprar pasta",
    "Comprar café",
    "Comprar azúcar",
    "Comprar agua",
    "Comprar papel higiénico",
    "Comprar jabón",
    "Comprar detergente",
    "Comprar shampoo",
    "Comprar pasta dental",
    "Comprar desodorante",
    "Comprar medicamentos",
    "Comprar vitaminas",
    "Comprar alimento para mascotas",
    "Comprar bolsas de basura",
    "Comprar cargador para el teléfono",
    "Comprar teclado",
    "Comprar mouse",
    "Comprar audífonos",
    "Comprar memoria USB",
    "Comprar disco externo",
    "Comprar libreta",
    "Comprar bolígrafos",
    "Comprar mochila",
    "Comprar botella de agua",
    "Comparar precios",
    "Buscar ofertas",
    "Revisar promociones",
    "Hacer pedido en línea",
    "Recoger un paquete",
    "Confirmar entrega",
    "Revisar el pedido recibido",
    "Devolver un producto",
    "Actualizar lista de compras",
    "Comprar regalo",

    //==================================================
    // ESTUDIO Y APRENDIZAJE
    //==================================================

    "Estudiar JavaScript",
    "Practicar HTML",
    "Practicar CSS",
    "Practicar Flexbox",
    "Practicar CSS Grid",
    "Practicar Responsive Design",
    "Practicar Git",
    "Practicar GitHub",
    "Aprender nuevas funciones de JavaScript",
    "Resolver ejercicios de programación",
    "Leer documentación de MDN",
    "Leer documentación de Vite",
    "Leer documentación de Git",
    "Leer documentación de LocalStorage",
    "Leer documentación de Fetch API",
    "Leer documentación de DOM",
    "Leer un capítulo del libro",
    "Tomar apuntes",
    "Repasar conceptos",
    "Resolver dudas pendientes",
    "Ver una clase del curso",
    "Completar un módulo del curso",
    "Realizar ejercicios prácticos",
    "Construir un proyecto pequeño",
    "Refactorizar ejercicios antiguos",
    "Practicar algoritmos",
    "Practicar lógica de programación",
    "Aprender expresiones regulares",
    "Aprender funciones flecha",
    "Aprender módulos ES",
    "Estudiar asincronía",
    "Practicar Promises",
    "Practicar Async Await",
    "Aprender manejo de errores",
    "Investigar buenas prácticas",
    "Leer un artículo técnico",
    "Guardar recursos interesantes",
    "Actualizar notas de estudio",
    "Revisar objetivos de aprendizaje",
    "Planificar la próxima sesión de estudio",

    //==================================================
    // FINANZAS
    //==================================================

    "Pagar factura de electricidad",
    "Pagar factura de agua",
    "Pagar factura de internet",
    "Pagar factura del teléfono",
    "Pagar alquiler",
    "Pagar tarjeta de crédito",
    "Revisar estado de cuenta",
    "Registrar gastos",
    "Registrar ingresos",
    "Actualizar presupuesto mensual",
    "Revisar presupuesto semanal",
    "Ahorrar dinero",
    "Transferir dinero",
    "Realizar una inversión",
    "Revisar inversiones",
    "Consultar saldo bancario",
    "Programar pago automático",
    "Cancelar suscripción",
    "Renovar suscripción",
    "Descargar comprobantes",
    "Organizar recibos",
    "Guardar factura",
    "Solicitar factura electrónica",
    "Comparar precios antes de comprar",
    "Actualizar hoja de gastos",
    "Revisar metas de ahorro",
    "Separar dinero para emergencias",
    "Calcular gastos del mes",
    "Revisar pagos pendientes",
    "Planificar compras del próximo mes",
    "Revisar promociones bancarias",
    "Actualizar datos bancarios",
    "Pagar seguro",
    "Renovar seguro",
    "Revisar crédito disponible",
    "Planificar inversión mensual",
    "Actualizar presupuesto familiar",
    "Registrar pago recibido",
    "Revisar historial de pagos",
    "Cerrar cuentas del mes",

    //==================================================
    // SALUD Y EJERCICIO
    //==================================================

    "Beber suficiente agua",
    "Caminar 30 minutos",
    "Salir a correr",
    "Ir al gimnasio",
    "Entrenar piernas",
    "Entrenar pecho",
    "Entrenar espalda",
    "Entrenar brazos",
    "Entrenar hombros",
    "Entrenar abdomen",
    "Realizar estiramientos",
    "Practicar yoga",
    "Practicar meditación",
    "Dormir ocho horas",
    "Preparar comida saludable",
    "Comer frutas",
    "Comer verduras",
    "Evitar bebidas azucaradas",
    "Tomar vitaminas",
    "Preparar almuerzo",
    "Preparar cena",
    "Agendar consulta médica",
    "Ir al dentista",
    "Comprar medicamentos",
    "Medir peso",
    "Controlar presión arterial",
    "Controlar nivel de azúcar",
    "Renovar receta médica",
    "Descansar 20 minutos",
    "Reducir tiempo frente a pantallas",
    "Salir a caminar",
    "Andar en bicicleta",
    "Escuchar música relajante",
    "Leer antes de dormir",
    "Preparar mochila del gimnasio",
    "Lavar ropa deportiva",
    "Comprar alimentos saludables",
    "Registrar progreso físico",
    "Planificar entrenamiento semanal",
    "Realizar chequeo médico",
];


//==================================================
// FUNCIONES AUXILIARES
//==================================================
let availableTasks = [];

function resetAvailableTasks() {
    availableTasks = [...TASKS];
}

function getRandomInteger(minimum, maximum) {
    return Math.floor(
        Math.random() * (maximum - minimum + 1)
    ) + minimum;
}

function getRandomTask() {
    if (!availableTasks.length) {
        resetAvailableTasks();
    }

    const randomIndex =
        getRandomInteger(
            0,
            availableTasks.length - 1
        );

    return availableTasks.splice(
        randomIndex,
        1
    )[0];
}

function getRandomPriority() {
    const random = Math.random() * 100;

    if (
        random
        <
        PRIORITY_DISTRIBUTION.HIGH_LIMIT
    ) {
        return "high";
    }

    if (
        random
        <
        PRIORITY_DISTRIBUTION.MEDIUM_LIMIT
    ) {
        return "medium";
    }

    return "low";
}

function getRandomCompleted() {
    return (
        Math.random() * 100
        <
        SEED_CONFIG.COMPLETED_PERCENTAGE
    );
}

function getRandomCreatedAt() {
    const date = new Date();

    const daysAgo =
        getRandomInteger(
            0,
            SEED_CONFIG.CREATED_DAYS_RANGE
        );

    date.setDate(
        date.getDate() - daysAgo
    );

    return date.toISOString();
}

function getRandomDueDate() {
    const date = new Date();

    const offset =
        getRandomInteger(
            -SEED_CONFIG.DUE_DATE_PAST_DAYS,
            SEED_CONFIG.DUE_DATE_FUTURE_DAYS
        );

    date.setDate(
        date.getDate() + offset
    );

    return date
        .toISOString()
        .split("T")[0];
}

//==================================================
// GENERADOR
//==================================================

function generateTask() {

    return {

        id: crypto.randomUUID(),

        text: getRandomTask(),

        completed: getRandomCompleted(),

        priority: getRandomPriority(),

        createdAt: getRandomCreatedAt(),

        dueDate: getRandomDueDate()

    };

}

//==================================================
// FUNCIÓN PRINCIPAL
//==================================================

export function seedTasks() {
    const storedTasks =
        localStorage.getItem(
            CONFIG.STORAGE_KEY
        );

    if (storedTasks) {
        return false;
    }

    resetAvailableTasks();

    const tasks =
        Array.from(
            {
                length:
                    SEED_CONFIG.TASK_COUNT
            },
            generateTask
        );

    try {
        localStorage.setItem(
            CONFIG.STORAGE_KEY,
            JSON.stringify(tasks)
        );

        return true;
    } catch (error) {
        console.error(
            "Error al generar las tareas de prueba:",
            error
        );

        return false;
    }
}