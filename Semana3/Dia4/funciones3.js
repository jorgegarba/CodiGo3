//Funciones que reciben parametros y retornan valor
function multiplicar(...numeros){
    var resultado = 1;
    for(let i = 0; i < numeros.length; i++){
        resultado = resultado * numeros[i];
    }
    return resultado;
}
// Si deseamos guardar el valor de retorno, usemos variables
// var res1 = multiplicar(4,5,6,3);
// var res2 = multiplicar(4,5);
// Si no deseamos guardar el valor de retorno
// usemos la llamada directa de la funcion
console.log(`res1 => ${multiplicar(4,5,6,3)}`);
console.log(`res2 => ${multiplicar(4,5)}`);


function sumar(a,b){
    return a+b;
}

