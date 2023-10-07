
$(".info-item .btn").click(function(){
    $(".container").toggleClass("log-in");
});
$(".container-form .btn").click(function(){
    $(".container").addClass("active");
});


// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Obtener todas las instancias de botones con la clase "btn"
    var botones = document.querySelectorAll(".btn");

    // Iterar sobre cada botón y agregar un manejador de eventos
    botones.forEach(function(boton) {
        boton.addEventListener("click", function() {
            // Obtener el valor del atributo data-destino
            var destino = boton.getAttribute("data-destino");

            // Redirigir a la página de destino
            window.location.href = destino;

            // Después de redirigir, llamar a la función para ajustar la altura
            ajustarAltura();
        });
    });

    // También llamar a la función al cargar la página por primera vez
    ajustarAltura();
});

function ajustarAltura() {
    mainContainer.style.minHeight = `${document.body.clientHeight}px`;
  }


// Función para cargar el contenido HTML en el div
function cargarContenido(rutaRelativa) {
    // Obtener el elemento contenedor
    const div = document.getElementById("contenedor");

    // Verificar la existencia del elemento antes de modificarlo
    if (div) {
        // Construir la ruta completa de la página a cargar
        const nombrePagina = `${rutaRelativa}.html`;

        // Crear una instancia de objeto Fetch para cargar contenido
        fetch(nombrePagina)
            .then(response => {
                if (!response.ok) {
                    // Mostrar detalles del error en la consola
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                // Insertar el contenido en el div
                div.innerHTML = data;
            })
            .catch(error => {
                // Manejar errores y mostrar detalles en la consola
                console.error(error);
                div.innerHTML = "No se pudo cargar el contenido.";
            });
    } else {
        // Mostrar mensaje de error si el elemento contenedor no se encuentra
        console.error("Elemento 'contenedor' no encontrado en la página.");
    }
}


document.addEventListener("DOMContentLoaded", function () {
    cargarContenido("/Inicio/inicio");
});

