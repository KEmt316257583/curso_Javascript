//objetos anidados

const producto = { 
    nombre : "Monitor" ,
    tamaño : "24 pulgadas",
    precio : 200,
    informacion : {       //objeto informacion dentro del objeto producto
        procesador : "core i3",
        capacidad : "1 tb"
    },
    tienda : "Steren" 
};

console.log(producto);

//Extraer la informacion de nombre, tamaño
//con o sin destructuring
//const {nombre} = producto;
console.log(nombre);

const {tamaño} = producto;
console.log (tamaño);

//Extraer la informacion de porsesador sin destructuring
console.log(producto.informacion.procesador);

let {nombre, precio, informacion : {procesador} } = producto;
console.log(procesador);

