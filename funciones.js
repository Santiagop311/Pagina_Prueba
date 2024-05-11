// Obtener el botón de registro y el modal
var botonRegistro = document.getElementById("botonRegistro");
var modal = document.getElementById("modal");

// Función para mostrar el modal
function mostrarFormulario() {
    modal.style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
    modal.style.display = "none";
}

// Asociar la función mostrarFormulario al evento click del botón
botonRegistro.onclick = mostrarFormulario;
