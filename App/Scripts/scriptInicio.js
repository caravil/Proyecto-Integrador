$(document).ready(function() {
    var carousel = $(".carousel");
    var totalImages = $(".carousel-item").length;
    var currentIndex = 0;
    var imageWidth = $(".carousel img").width();
    var contentContainer = $("#content-container");
    var textOverlay = $("#text-overlay");

    $(".next-btn").click(function() {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    $(".prev-btn").click(function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalImages - 1;
        }
        updateCarousel();
    });

    $(".carousel-item").click(function() {
        var content = $(this).data("content");
        var url = $(this).data("url");

        // Cambiar el contenido del contenedor con el contenido asociado al hacer clic en la imagen
        contentContainer.load(url);

        // Mostrar el overlay de texto con fondo blanco
        textOverlay.html(content).fadeIn();
    });

    // Ocultar el overlay de texto al hacer clic fuera de él
    $(document).mouseup(function(e) {
        if (!textOverlay.is(e.target) && textOverlay.has(e.target).length === 0) {
            textOverlay.fadeOut();
        }
    });

    function updateCarousel() {
        var newTransformValue = -1 * currentIndex * imageWidth;
        carousel.css("transform", "translateX(" + newTransformValue + "px)");
    }
});
