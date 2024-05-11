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
document.addEventListener("DOMContentLoaded", function() {
  var botonNoticias = document.getElementById("botonNoticias");
  var seccionNoticias = document.getElementById("noticias");

  botonNoticias.addEventListener("click", function(event) {
      event.preventDefault(); // Evitar que el enlace del botón realice una acción predeterminada
      // Alternar la visibilidad de la sección de noticias
      if (seccionNoticias.style.display === "block") {
          seccionNoticias.style.display = "none"; // Ocultar la sección de noticias si ya está visible
      } else {
          seccionNoticias.style.display = "block"; // Mostrar la sección de noticias si está oculta
      }
  });
});

