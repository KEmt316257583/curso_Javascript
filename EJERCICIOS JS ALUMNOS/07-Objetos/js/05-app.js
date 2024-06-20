const persona = {
    nombre : "Kevin",
    apellido : "Martinez"

};

persona.edad = 25;
console.log(persona);

//Previene que se quiera modificar el objetos ya sea agregar quitar o alterar alguna variable
Object.freeze(persona);

persona.nombre = "Alicia";
persona.carrera = "Ingenieria";
delete persona.edad;

console.log(persona);

//Nos devuelve un valor bool para saber si el objeto esta o no congelado
if(Object.isFrozen(persona));
    alert("El campo nombre no puede ser editado o eliminado");

