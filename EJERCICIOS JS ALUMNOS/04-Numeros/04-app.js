const num = "20";
const num1 = '22.1';
const num2 = 'uno';
const num3 = 2;

console.log(num);

//convertir cadenas
console.log(Number.parseInt(num));
console.log(parseInt(num));
console.log(Number.parseFloat(num1));  //se usa para numeros decimales asi como con numeros enteros (no recomendado)
console.log(Number.parseFloat(num2));  //esta consulta marcara NaN por 

//revisar si el numero es entero
console.log(Number.isInteger(num3));

//convertir a cadena
console.log(num3.toString);

