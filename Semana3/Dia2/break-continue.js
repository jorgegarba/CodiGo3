// var rpta="";
// while(true){
//     rpta = prompt(`///////MENU//////
//                     1.- Fecha Actual
//                     2.- Imprimir Saludo
//                     3.- Terminar el programa
//                     ///////FIN///////
//                     Ingrese la opción`);
//     if(rpta==1) alert(`La fecha actual es ${new Date()}`);
//     if(rpta==2) alert("Hola");
//     if(rpta==3) break; 
// }

// for(var i = 0; i < 10; i++){
//     if(i == 5){
//         break;
//     }
//     console.log(`El valor de i => ${i}`);
// }

// for(var i = 0; i < 10; i++){
//     if(i == 5){
//         continue;
//     }
//     console.log(`El valor de i => ${i}`);
// }
var flag = false;
for(var i = 0; i < 10; i++){
    console.log(`i => ${i}`);
    for(var j = 0; j < 10; j++){
        if( j % 2 != 0){
            // flag = true;
            break;
        }
        console.log(`j => ${j}`);
    }
    // if(flag == true) break;
}


//OPERADOR TERNARIO => resume en una linea la ejecución
// de un if y un else que tengan una sola sentencia
// ? : ;
//EJM
//

var x = 8;
// if(x==8){
//     console.log("x es igual 8");
// }else{
//     console.log("x no es igual 8");
// }

x==8 ? console.log("x = 8") : console.log("x != 8");