const producto = { 
    nombre : "Monitor" ,
    tamaño : "24 pulgadas",
    precio : 200,
    informacion : {       //objeto informacion dentro del objeto producto
        procesador : "core i3",
        capacidad : "1 tb"
    },
    tienda : "Steren", 
    disponible : true
};

//const no permite alterar su variable a menos que sea un objeto
producto.disponible = false;
console.log(producto.disponible);
