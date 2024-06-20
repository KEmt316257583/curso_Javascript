//comunicacion entre funciones

iniciarApp();

function iniciarApp(){
    console.log("Iniciando nuetra aplicacion...");
};

function segundaFuncion(){
    console.log("Desde la segunda aplicacion");
    usuarioAutenticado();
};

function usuarioAutenticado(nombre){
    console.log("Autenticacion correcte");
    console.log(`Usuario ${nombre}`);
};

