const carrito = [
    {nombre : 'Monitor', precio : 100},
    {nombre :  'TV', precio : 600},
    {nombre :  'Tablet', precio : 7700},
    {nombre :  'Teclado', precio : 80},
    {nombre :  'Celular', precio : 1090},
    {nombre :  'Audifonos', precio : 10000},
];

const nuevoArray = carrito.map (function(producto){
    return `Articulo: ${producto.nombre} Precio: ${producto.precio}`
});

const nuevoArray1 = carrito.forEach (function(producto){
    return `Articulo: ${producto.nombre} Precio: ${producto.precio}`
});

console.log(nuevoArray);
console.log(nuevoArray1);
