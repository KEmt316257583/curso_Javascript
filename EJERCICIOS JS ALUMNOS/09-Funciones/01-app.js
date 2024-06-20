//existne dos tipos de funciones 
//function:
//Arrow function : funcion flecha

//Definicion
function sumar(numero1,numero2){
    console.log(numero1+numero2)
}
sumar(2,2);

function sumar(){
    console.log(2+2);
};

//Llamada a la funcion 
sumar();

const funcion_sumar = function(){
    console.log(3+3);
};

funcion_sumar();

//***********esta parte requiere que const resta_numero2 sea declarada antes 
const resta_numero2 = function(){
    console.log(3-2);
};

//funcion_sumar();

resta_numero();

function resta_numero(){
    console.log(4-1);
};

//***********esta parte requiere que const resta_numero2 sea declarada antes 
resta_numero2();

//alerta("Error en el servidor");
//prompt("Ingresa tu nombre:");

const numero = 1;
console.log(numero.toString());
parseInt('1');