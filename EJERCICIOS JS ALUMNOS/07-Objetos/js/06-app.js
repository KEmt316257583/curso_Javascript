const persona = {
    nombre : "Kevin",
    apellido : "Martinez",
    edad : 25,
    carrera : "Derecho"
};

//Seal : tampoco permite agregar o eliminar las propiedades
//esta permite que se modifiquen los que ya existen

Object.seal(persona);
persona.apMat = "Folers";
delete persona.nombre;
persona.nombre = "Valeria";
console.log(persona);

console.log(Object.isSealed(persona)) 


