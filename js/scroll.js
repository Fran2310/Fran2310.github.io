let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    let desplazamientoActual = window.pageYOffset;

    header.classList.toggle("up",ubicacionPrincipal>=desplazamientoActual)

    ubicacionPrincipal = desplazamientoActual;
});