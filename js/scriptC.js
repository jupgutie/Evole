function toggleProductos(tituloCategoria) {
    const listaProductos = tituloCategoria.nextElementSibling;
    const todasLasListas = document.querySelectorAll('.productos-lista'); // Selecciona todas las listas de productos

    // Cierra todas las listas de productos
    todasLasListas.forEach(lista => {
        if (lista !== listaProductos) { // Evita cerrar la lista seleccionada
            lista.style.display = 'none';
        }
    });

    // Alterna la visibilidad de la lista seleccionada
    listaProductos.style.display = (listaProductos.style.display === 'none' || listaProductos.style.display === '') ? 'block' : 'none';
}

// Capturamos el clic en el icono de usuario
document.getElementById("user-icon").addEventListener("click", function() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    // Alternamos entre mostrar y ocultar el menú
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
});

// Cerrar el menú si se hace clic fuera de él
window.addEventListener("click", function(event) {
    var dropdownMenu = document.getElementById("dropdown-menu");
    if (event.target !== document.getElementById("user-icon")) {
        dropdownMenu.style.display = "none";
    }
});