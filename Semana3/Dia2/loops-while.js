var base = 6;
var limite = 10;
var cont = 0;

while(cont < limite){
    console.log(`${base} x ${cont} = ${base*cont}`);
    cont++;
}
// Hacer un programa que reciba infinitos numeros por el usuario
// el programa debe terminar unicamente si el usuario ingresa
// un numero negativo y mostrar el promedio de todos los numeros ingresados

var numero =0;
var suma = 0;
var cont = 0;

while(numero >= 0){
    numero = +prompt("Ingresa un número");
    if(numero>=0){
        cont++;
        suma = suma + numero;
    }
}
console.log(`Valores Ingresados => ${cont}`);
console.log(`Suma de los valores => ${suma}`);
console.log(`Promedio => ${suma/cont}`);




