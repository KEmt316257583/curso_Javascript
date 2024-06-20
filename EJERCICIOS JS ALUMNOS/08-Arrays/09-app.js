const carrito = [
    {nombre : 'Monitor', precio : 100},
    {nombre :  'TV', precio : 600},
    {nombre :  'Tablet', precio : 7700},
    {nombre :  'Teclado', precio : 80},
    {nombre :  'Celular', precio : 1090},
    {nombre :  'Audifonos', precio : 10000},
];

for(let i=0; i < carrito.length; i++){
    console.log(`Articulo: ${carrito[i].nombre} Precio: ${carrito[i].precio}`);
};

//forEach
carrito.forEach(function (producto){
    console.log(`Articulo: ${producto.nombre} Precio: ${producto.precio}`)
});
