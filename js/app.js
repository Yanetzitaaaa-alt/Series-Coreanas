// Función para cambiar entre secciones
function mostrarSeccion(id) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.classList.remove('activa'));

    // Mostrar la sección seleccionada
    const seccionActiva = document.getElementById(id);
    seccionActiva.classList.add('activa');
}
