//Palabra reservada this
//this es el valor sobre le objeto que estamos usando en el momento
//A los objetos se les puede agregar funciones

const persona = {
    nombre : "Kevin",
    apellido : "Martinez",
    mostrarInfo :  function(){
        return `El nombre ${this.nombre} y su apellido ${this.apellido}`
    }
};

console.log(persona.mostrarInfo());

//llaves o atributos
console.log(Object.keys(persona));

//valor de las llaves
console.log(Object.values(persona));
console.log(Object.entries(persona));


//seal       permite modificar solo las propiedades existentes ne le objeto, no se pueden eliminar ni crear nigun valor
//freeze     no se puede realizar algun tipo de modificacion (modificar valores)