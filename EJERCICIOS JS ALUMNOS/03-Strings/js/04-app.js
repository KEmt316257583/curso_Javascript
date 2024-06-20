const nombre = "Kevin Martinez";
console.log(nombre);

//replace 
console.log(nombre.replace("Kevin" , "Alejandro"));
console.log(nombre.replace("Martinez" , " "));

//slice
console.log(nombre.length);
//sirbe para cortar cadenas indicnado que mande desde el indice 0 al 3
console.log(nombre.slice(0,3));
//manda los valores despues de indice 8
console.log(nombre.slice(8));

//subSttring 
//permite colocar numeros menores a los colocados respecto a los anterioes
console.log(nombre.substring(6,10));
console.log(nombre.substring(2,1));

//charAt
//permite traer el valor dentro de indice indicado
console.log(nombre.charAt(4));

//repeat
const producto = "Monitor de 24 pulgadas";
const descuento = "en promocion" .repeat(3);

console.log(descuento);
console.log(producto.repeat(2.2));
console.log(`${producto} ${descuento}`);

//split: conviente una cadena de caracteres en un arreglo
const actividad = "Estoy aprendiendo JavaScript";
console.log(actividad.split(" "));



