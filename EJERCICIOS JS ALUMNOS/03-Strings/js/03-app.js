const producto = "Monitor";
const pulgadas = "24 pulgadas";

//Metodo concat
console.log(producto.concat("En descuento"));
console.log(producto.concat(pulgadas));

console.log(producto + pulgadas);
console.log(producto + " " + pulgadas);
console.log(producto + "Tiene un tamaño de " + pulgadas);

console.log("El producto" , producto , "Es de " , pulgadas);

console.log(`El producto ${producto}`);

const producto2 = "         Mouse";

//Elimina los espacios en blanco al inicio de la cadena de caracteres 
console.log(producto2.trimStart());
//Elimina espacios del final
console.log(producto2.trimEnd());

const nombre = "     Kevin    ";
console.log(nombre);
console.log(nombre.trim());
console.log(nombre.trimStart().trimEnd());



