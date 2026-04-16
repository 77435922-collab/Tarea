// productos.js - Usando bucle FOR

document.addEventListener('DOMContentLoaded', function() {

    const flores = [
        { id: 1, nombre: "Rosas Premium",     precio: 60, img: "imagenes/rosas.jpg" },
        { id: 2, nombre: "Orquídeas",         precio: 70, img: "imagenes/orquideas.jpg" },
        { id: 3, nombre: "Lirios",            precio: 55, img: "imagenes/lirios.jpg" },
        { id: 4, nombre: "Tulipanes",         precio: 45, img: "imagenes/tulipanes.jpg" },
        { id: 5, nombre: "Girasoles",         precio: 50, img: "imagenes/girasoles.jpg" }
    ];

    const contenedor = document.getElementById("productos-container");

    // Bucle FOR clásico - Genera las tarjetas de productos
    for (let i = 0; i < flores.length; i++) {
        const flor = flores[i];

        const cardHTML = `
            <div class="product-card">
                <img src="${flor.img}" alt="${flor.nombre}">
                <h3>${flor.nombre}</h3>
                <div class="price">S/ ${flor.precio}.00</div>
                <button class="buy-btn" onclick="verDetalle(${flor.id})">
                    Ver Detalle
                </button>
            </div>
        `;

        contenedor.innerHTML += cardHTML;
    }

    console.log(`Se cargaron ${flores.length} productos usando bucle FOR`);
});

function verDetalle(id) {
    window.location.href = `detalle.html?id=${id}`;
}