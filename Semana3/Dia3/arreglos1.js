//ITERANDO UN ARREGLO

var nombres = ["Jorge","Ximena","Javier","Martha"];

var saludos = [];

for(var i = 0; i < nombres.length; i++){
    // saludos.push("Hola " + nombres[i]);
    saludos[i] = "Hola " + nombres[i];
}
console.log(saludos);


//////
var apellidos   = ["Garnica", "Monje", "Salinas"];
var salarios    = [3000.00, 7000.00, 2500.00];
var cargos      = ["Gerente", "Jefe de Proyectos", "Caja"];
for(var i = 0; i < salarios.length; i++){
    console.log(`Sr(a). ${apellidos[i]} es ${cargos[i]} y factura ${salarios[i]}`);
}

///
console.log("PLANILLAS////////////////////////");

var planilla = [
                ["Jorge",3000.00,"Gerente"],
                ["Carlos",3500.00,"Asesoria Legal"],
                ["Cecilia",4000.00,"Programadora"]
               ];

for(var i = 0; i < planilla.length; i++){
    console.log(`${planilla[i][0]} gana ${planilla[i][1]} con el cargo ${planilla[i][2]}`)
}

//MATRIZ

console.log("MATRIZZZZZZZZZZZZZZZZ");

var planilla = [
                    [1,2,3,5],
                    [90,45,67,78,99],
                    [80,43,12,42]
                ];

for(var i = 0; i < planilla.length ; i++){
    for(var j = 0; j < planilla[i].length; j++){
        console.log(planilla[i][j]);
    }
}


// SUMA DE MATRICES
console.log("SUMA DE MATRICES");

var matriz1 = [[1,2,3],[4,5,6],[7,8,9],[7,8,9]];
var matriz2 = [[11,22,33],[44,55,66],[77,88,99],[7,8,9]];

var matriz3 = [] ;
for(var i = 0; i< matriz1.length; i++){
    matriz3[i] = [];
    for(var j = 0; j<matriz1[i].length; j++){
        matriz3[i][j] = matriz2[i][j] + matriz1[i][j]
    }
}
console.log(matriz3);

/////// TRANSPUESTA
console.log("//////TRANSPUESTA//////");

var inicial = [[3,5,1],[6,7,8]];
//resultado = [[3,6],[5,7],[1,8]];
var resultado = [];

for(var i = 0 ; i < inicial[0].length; i++){
    resultado[i] = [];
    for(var j = 0; j < inicial.length; j++){
        resultado[i][j] = inicial[j][i];
    }
}

console.log(resultado);

