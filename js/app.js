function mostrarSeccion(id) {
    // Ocultar TODAS las secciones MENOS la de inicio
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => {
        if (sec.id !== 'inicio') { // Si NO es inicio, lo ocultamos
            sec.classList.remove('activa');
        }
    });

    // Mostrar la sección seleccionada
    const seccionActiva = document.getElementById(id);
    seccionActiva.classList.add('activa');
}
