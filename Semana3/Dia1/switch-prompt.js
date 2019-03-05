//La estructura switch evalua un conjunto de valores 
//posibes que una variable puede tomar.

var edad = 90;
switch(edad){
    case 20:
        console.log("Vale 20");        
        break;
    case 21:
        console.log("Vale 21");
        break;
    case 22:
        console.log("Vale 22");
        break;
    default:
        console.log("No existen datos - ERROR");
}
console.log("Fin del programa");




var precio = 6000;
switch(true){
    case precio > 4000 && precio < 10000:
        console.log("precio > 4000 && precio < 10000");
        break;
    case precio >= 10000 && precio < 20000:
        console.log("precio >= 10000 && precio < 20000");
        break;
    default:
        console.log("No esta en el rango");
}


//prompt => permite al usuario ingresar datos y captrarlos en
//programa.

var nombre = prompt("Ingrese su nombre");
var edad = prompt("Ingrese su edad");
// conversion directa del ingreso del usuario a tipo de dato entero
var nroHijos = parseInt(prompt("Ingrese el número de Hijos"));
// parseInt => Convierte un string a entero
var edadNumber = parseInt(edad);
// El signo + como prefijo, convierte un string a entero
var edadNumber2 = +edad;

console.log(`${nombre} - ${edad} años`);
console.log(edad);
console.log(edadNumber);
console.log(nroHijos);
console.log(edadNumber2);