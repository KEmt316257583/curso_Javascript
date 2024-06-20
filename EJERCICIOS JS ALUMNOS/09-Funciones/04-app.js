function sumar(nombre){
    return `saludos a ${nombre}`;
};

let resultado = console.log(sumar("Jorge"));
console.log(resultado);
resultado = sumar("Alex");
console.log(resultado);

let total = 0;

//++ i++ i = i + 1
//-- i-- i = i - 1
//variable1 += variable2 -> variable1 = variable1 + variable 2
//variable1 -= variable2 -> variable1 = variable1 - variable 2
//variable1 /= variable2 -> variable1 = variable1 / variable 2
//variable1 *= variable2 -> variable1 = variable1 * variable 2


function agregarCarrito(){
    return total += precio;
};

function calcularImpuesto(total){
    return total * 1.15;
};

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);

console.log(total);

let totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de: ${totalPagar}`);