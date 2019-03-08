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
// 3,6,7,9
console.log(`Resultado => ${sumar(sumar(3,6),sumar(7,9))}`);

// Realizar una funcion que dados 2 parámetros (a y b)
// Calcule la multiplicación de ambos sin usar el signo 
//  * 
// solo se pueden usar sumas y restas
// la funcion debe retornar el producto


// Realizar una funcion que dados el dividendo y el divisor
// Calcule la division entera  + el residuo(si tuviera)
// sin usar el signo / ni  % ni mod ni nada
// solo sumas y/o restas
// la funcion debe retornar el cociente y el residuo

