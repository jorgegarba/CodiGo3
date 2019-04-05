'use strict';
function sumar(a,b){
    return a+b;
}

let sumar2 = function(a,b){
    return a+b;
}
// transformando una función tradicional a una
// función de flecha
let sumarFlecha = (a,b)=>{
    return a+b;
};
console.log(sumarFlecha(7,8));


// si y solo si la función recibe un solo parametro
// se pueden omitir los paréntesis
let cuadrado = nro => {return nro*nro};
console.log(cuadrado(7));


//si el desarrollo de la función tiene una sola
//linea de retorno se pueden omitir las llaves
// y la palabra 'return'
let cubo = nro => nro*nro*nro;
console.log(cubo(6));






