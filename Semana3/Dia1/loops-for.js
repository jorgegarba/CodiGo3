// Una estructura repetitiva es una estructura
// que repetirá n veces una porción de codigo
// for - while - do while
var cont = 34;
// la variable 'cont' se reinicia en el ciclo for 
for(cont = 0; cont < 9; cont++){
    console.log(`Mensajito ${cont}`);
}
// Programa para hacer una tabla de multiplicar
// EL USUARIO INGRESA el numero
// EL USUARIO INGRESA el numero limite en el que acaba la tabla
var base = parseInt(prompt("Ingrese el numero base"));
var limite = parseInt(prompt("Ingrese el limite"));
var cont = 0;
for(cont = 0; cont < limite; cont++){
    console.log(`${cont} x ${base} = ${cont*base}`);
}
//programa para calcular el promedio de N notas
// EL USUARIO INGRESA "n"
// EL USUARIO INGRESA las "n" de notas

var n = parseInt(prompt("Ingrese el numero de notas"));
var cont;
var suma = 0;
var nota;
for(cont = 0; cont < n; cont++){
    nota = parseFloat(prompt("Ingrese la nota"));
    suma = suma + nota;
}
console.log(`El promedio es ${suma/n}`);

// Un empleado de la tienda “Tiki Taka” realiza N ventas durante el día,
//se requiere
// saber cuántas de ellas fueron mayores a $1000, cuántas fueron mayores
// a $500 pero menores o iguales a $1000, y cuántas fueron menores o
// iguales a $500. Además, se requiere saber el monto de lo vendido en cada
// categoría y de forma global. Realice un algoritmo que permita determinar
// lo anterior y represéntelo mediante el diagrama de flujo, el pseudocódigo
// y el diagrama N/S, utilizando el ciclo apropiado.

var n = parseInt(prompt("Ingrese el Número de Ventas"));
//M1000 => numero de ventas mayores a 1000
//tM1000 => total de ventas mayores a 1000
//M500 => numero de ventas mayores a 500
//tM500 => total de ventas mayores a 500
//m500 => numero de ventas menores iguales a 500
//tm500 => total de ventas menores iguales a 500
//totalGlobal => monto global de las ventas
var M1000 = 0, tM1000 = 0; 
var M500 = 0, tM500 = 0;
var m500 =0, tm500 =0;
var monto = 0;
var totalGlobal = 0;
for(var cont = 0; cont < n; cont++){
    monto = parseFloat(prompt(`Ingrese el monto ${cont}`));
    switch(true){
        case monto > 1000:{
            M1000++;
            tM1000 = tM1000 + monto;
            break;
        }
        case monto > 500 && monto <= 1000:
            M500++;
            tM500 = tM500 + monto;
            break;
        case monto <= 500 && monto > 0:
            m500++;
            tm500 = tm500 + monto;
            break;
        default:
            alert(`El valor ${monto}, es incorrecto`);
            cont--;
    }
}
totalGlobal = tM1000 + tM500 + tm500;

console.log(`TOTAL    DE VENTAS <=500 ---- ${tm500}`);
console.log(`CANTIDAD DE VENTAS <=500 ---- ${m500}`);

console.log(`TOTAL    DE VENTAS >500 y  <1000 ---- ${tM500}`);
console.log(`CANTIDAD DE VENTAS >500 y  <1000 ---- ${M500}`);

console.log(`TOTAL    DE VENTAS > 1000 ---- ${M1000}`);
console.log(`CANTIDAD DE VENTAS > 1000 ---- ${tM1000}`);

console.log(`Total vendido => ${totalGlobal}`);