'use strict';
//CONDICIONALES
//if => si la condicion se cumple
// else => la condicion no se cumple
// COMPARADORES ARITMETICOS
// >     =>     mayor
// <     =>     menor
// >=    =>     mayor o igual
// <=    =>     menor o igual
// ==    =>     igual en valor
// ===   =>     igual en valor y en tipo de dato
// !=    =>     Diferente en valor
// !==   =>     Diferente en valor y en tipo de dato
// COMPARADORES LÓGICOS
// &&  |   y  | and
// ambas condiciones deben ser verdaderas para dar un resultado verdadero
// ||  |   ó  |  or
// al menos una de ambas condiciones debe ser verdadera para dar un 
// resultado verdadero
// !   | negacion | not



var edad = 17;
if(edad >= 19){
    console.log("Si pásele joven!");
}else{
    console.error("No, vaya a limpiarse sus mocos");
}
debugger;
// ejemplo de comparadores 

var x = 90;
var y = 80;
var z = 15;

if( (x/2)>(z*3) || ( (z>(y+x)/8) && y!= 81) ){
    console.log("verdadero");
    
}else{
    console.log("falso");
}
// calcular si un año es bisiesto
// años bisiestos => 2016, 2020, 2024, 2028, 2032, 2036
var anio = 2020;
// tiene que ser multiplo de cuatro Y no debe ser multiplo de 100
// o en todo caso, que sea multiplo de 400
if(((anio % 4 == 0) && (anio % 100 != 0)) || ( anio % 400 == 0)){
    console.log("Si es Bisiesto");
}else{
    console.log("No es bisiesto");   
}

var sueldo = 2500.00;

if(!(sueldo>2500)){
    console.log("si es mayor");
}else{
    console.log("no es mayor");
}

var apto = true;
if(!apto){
    console.log("No es apto para obtener la licencia");
}else{
    console.log("Si es apto para obtener la licencia");
}

//si es ropa para dama hacer un 15% sobre el precio
//si es ropa para varon hacer un 20% sobre el precio

//si la talla es m hacer un 10% sobre el precio descontado
var talla = "m";
var genero = "varon";
var precio = 100.00;
var precioFinal = 0;

if(genero == "dama"){
    precioFinal = precio * 0.85;
}else{
    precioFinal = precio * 0.80;
}

if(talla == "m"){
    precioFinal = precioFinal * 0.9;
}
console.log("Precio Final "+precioFinal+" Soles.");
console.log(`Precio Final ${precioFinal} Soles.`);

