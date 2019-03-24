// VARIABLES
// se crean con el prefijo "var"
// sus nombres no pueden iniciar con un numero
// GRAL> en javascript, colocar un ";" al finalizar
// una sentencia o linea de codigo;
var x = 0;
// console.log(), sirve para mostrar datos en el navegador
// en la zona de la consola
x = 69;
var y = x;

y = y + 1;

console.log(y);
// una variable en javascript puede mutar de tipo de dato
x = "PORQUE";
console.log(x);


// TIPOS DE DATOS
console.log("====TIPOS DE DATOS====");
// NUMERICOS | NUMBER => Todos los numeros
var sueldo = 2500.50;
var edad = 25;
// TEXTOS | STRING | CADENAS => Conjuto de caracteres
var saludo = "Hola amiguitos";
var despedida = "Chau amiguitos";
// BOOLEANAS - (verdadero o falso) - (true | false)
var verdedero = true;
var falsa = false;


console.log(sueldo);
console.log(verdedero);
console.log(despedida);


// OPERADORES ARITMETICOS
console.log("====OPERADORES ARITMETICOS====");
// + - * /
// % => módulo | mod
var n1 = 8;
var n2 = 9;
var suma = n1 + n2;
var resta = n1 - n2;
var division = n1 / n2;
var multiplicacion = n1 * n2;
// concatenar textos => juntar textos o variables
console.log("n1 => " + n1);
console.log("n2 => " + n2);
console.log("suma1 => " + suma);
console.log("suma2 => " + (n1 + n2));
console.log("resta => " + resta);
console.log("division => " + division);
console.log("multiplicacion => " + multiplicacion);

console.log("modulo (20/7) residuo => " + ( 20 % 7 ) );


