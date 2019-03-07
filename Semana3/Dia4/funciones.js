// 'use strict';
// JavaScript va ser estricto al momento de 
// respetar los ambitos de las variables, los puntos y comas,
// La transformacion automatica de los tipos de datos
var a = 10;
// VARIABLE GLOBAL => Se puede usar en todo el documento 
// se puede usar en todas la funciones
console.log(`a => ${a}`);
//Funcion que no recibe parametros ni retorna valor
//Declarando a la funcion
function miFuncion(){
    a = 78;
    console.log(`a => ${a}`);
}
// Llamando o invocando a la funcion
miFuncion();
console.log(`a => ${a}`);


var y = 8;
let m = 7;
const PI = 3.1416;
console.log(PI);

if(y==8){
    // la variable t solo estara presente dentro de la estructura if
    let t = 900;
    console.log(m);
    console.log(PI);
}
console.log(q);
console.log(t);


