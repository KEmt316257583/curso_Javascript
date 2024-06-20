
const persona = { 
    nombre : "Kevin" ,
    apellido : "Martinez" //puede o no llevar coma el ultimo elemento 
};

//sintaxis de punto 
console.log(persona.nombre);  //mostrara el valor de la variable nombre dentro del objeto persona

//sintaxis 
console.log(persona['apellido']);

//agregar un nuevo atributo o clave a mi objeto
persona.edad = 20
console.log(persona);

//eliminar propiedades de objetos
delete persona.apellido;
console.log(persona);


