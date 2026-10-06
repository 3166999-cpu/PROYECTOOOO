/* =========================================
   NICOLE FASHION
   JAVASCRIPT PRINCIPAL
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("NICOLE FASHION cargada correctamente.");

    // Efecto sencillo al pasar el mouse por los productos
    const productos = document.querySelectorAll(".producto");

    productos.forEach(function (producto) {

        producto.addEventListener("mouseenter", function () {
            producto.style.transition = "0.3s";
        });

    });

});