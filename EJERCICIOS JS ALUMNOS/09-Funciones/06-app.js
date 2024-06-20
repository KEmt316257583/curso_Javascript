//Arrow Function:

//Funcion anonima
const aprendiendo = function(){
    console.log("Aprendiendo JS");
};

//Funcion flecha
const aprendiendo2 = () => console.log("Aprendiendo JS");

const aprendiendo4 = () => {
    console.log("Aprendiendo JS");
};

const aprendiendo3 = () => "Aprendiendo JS";
console.log(aprendiendo3());

const nuevo_aprendizaje2 = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);

nuevo_aprendizaje2("JavaScript para desarrollo web");

//si tenemos solo un paramentro los parentecis se pueden omitir

const nuevo_aprendizaje = (tecnologia , tecno) => console.log(`Aprendiendo ${tecnologia} ${tecno}`);

nuevo_aprendizaje2("JavaScript para desarrollafor tipo web");
nuevo_aprendizaje("HTML", "CSS");






//crear un nuevo array llave y valor (contexto libre)

//recorrer con map y foreach usando funciones flech