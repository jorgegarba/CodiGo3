'use strict';
// funcion que no recibe ni devuelve parametros
function miFuncion(){

}
miFuncion();

// funcion que recibe parametros pero que no devuelve valor
// los parametros pueden tener valores por defecto

function potencia(base = 1, exponente = 1){
    let resultado = base ** exponente;
    console.log(`Pontencia => ${resultado}`);
}
potencia(2,4);
potencia(5,3);
potencia(8,3);
potencia(6,4,5);
potencia(5);

function spread(arreglo = []){
    console.log(arreglo);
    
}
var x = [1,2,3];
spread(x);

console.log("N elementos");

function spread2(a,b, ...elementos){
    console.log(elementos);
    console.log(a);
    console.log(b);
}

spread2(1,2,3);
spread2(4,3,223,3,6,7);
spread2();

