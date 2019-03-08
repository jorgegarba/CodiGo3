'use strict';
// Cuando se incluye el () al final de la función,
// el valor que toma la variable 'anonima' es el resultado 
// de la ejecución de la función.
// Esa función, nunca mas podrá ser ejecutada.
var anonima = function(a=90,b=80){
    return (a+b);
}();
// Cuando no se incluye el () al final de la función,
// la funcion 'anonima2', podrá invocarse N veces haciendo 
// referencia a la misma EJM: anima2(6,7);
var anonima2 = function(a=90,b=80){
    return (a+b);
};

function normal(a,b){
    return (a+b);
}
console.log(anonima);
console.log(normal(57,5));