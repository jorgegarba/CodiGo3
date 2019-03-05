var numero = -9000;
var cont = 0;
var suma = 0;
do{
    numero = +prompt("Ingresa un numero");
    if(numero >= 0){
        suma = suma + numero;
        cont++;
    }
}while(numero >= 0);

console.log(`Valores Ingresados => ${cont}`);
console.log(`Suma de los valores => ${suma}`);
console.log(`Promedio => ${suma/cont}`);

//Hacer programa para que el usuario ingrese una contraseña
//El usuario tiene 3 intentos, si falla los 3.
//El programa debe culminar.
// var pwd = "";
// var intentos = 0 ;
// do{
//     pwd = prompt("Ingresa una contraseña");
//     intentos++;
//     if(pwd === "qwerty"){
//         alert("Bienvenido");
//         intentos = 3;
//     }else{
//         alert(`ERROR, le quedan ${3-intentos} intentos`);
//     }
// }while(intentos < 3);

var pwd = "";
var intentos = 0 ;
do{
    pwd = prompt("Ingresa una contraseña");
    intentos++;

}while(intentos < 3 || pwd === "qwerty");

if(intentos < 3 && pwd === "qwerty"){
    console.log("bienvenido");
}
