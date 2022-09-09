let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    let desplazamientoActual = window.pageYOffset;
    console.log(desplazamientoActual)

    header.classList.toggle("up",ubicacionPrincipal>=desplazamientoActual)

    ubicacionPrincipal = desplazamientoActual;
});

let ubicacioninicial = window.pageYOffset;
window.addEventListener("scroll", function() {
    var submenu = document.querySelector("#submenu");
    submenu.classList.toggle("view",ubicacioninicial==0)
});