var xprincipal = document.getElementById("principal");
//createElement([nombre]) => Crea un nuevo elemento html
var parrafo = document.createElement("p");
parrafo.innerHTML = "Hola, soy un párrafo";
parrafo.style.color = "blue";
//elemento1.appendChild(elemento2)
// agrega al elemento1, el elemento2
// al final de todos sus hijos directos
xprincipal.appendChild(parrafo);

for(let i=0 ; i<5; i++){
    let miParrafo = document.createElement("p");
    miParrafo.innerHTML = `Texto del Párrafo ${i+1}`;
    xprincipal.appendChild(miParrafo);
}

// Crear una tabla de n elementos
// Cada fila tendrá los campos 
// nro (numeración automática)
// cantidad (ingresado por el usuario)
// descripción (ingresado por el usuario)
// P.unitario (ingresado por el usuario)
// P.total (calculado por el sistema).
// Al final de la tabla mostrar el total de la compra


//Capturando al al elemento section
var seccion = document.getElementById("miSeccion");
// Pidiendo n elementos al usuario
var n = +prompt("Ingrese la cantidad de elementos");
// Creando la tabla
var tabla = document.createElement("table");
// Creando la cabecera <tr></tr>
var trCabecera = document.createElement("tr");
// Crean los <th></th> (columnas para la cabecera)
var thNro = document.createElement("th");
thNro.innerHTML = "Nro."; 
var thCant = document.createElement("th");
thCant.innerHTML = "Cant.";
var thDesc = document.createElement("th");
thDesc.innerHTML = "Descripción";
var thPunit = document.createElement("th");
thPunit.innerHTML = "P. Unitario";
var thPtotal = document.createElement("th");
thPtotal.innerHTML = "P. Total";


//Insertando los th's al tr
trCabecera.appendChild(thNro);
trCabecera.appendChild(thCant);
trCabecera.appendChild(thDesc);
trCabecera.appendChild(thPunit);
trCabecera.appendChild(thPtotal);

//Insertando el tr(cabecera) a la tabla
tabla.appendChild(trCabecera);
seccion.appendChild(tabla);
tabla.border = 1;
let pFinal = 0;
for(let i = 0 ; i < n; i++){
    //creando la fila para cada elemento
    let tr = document.createElement("tr");
    //creando la columna para el nro
    let tdNro = document.createElement("td");
    tdNro.innerHTML = `${i+1}`;
    //creando la columna para la cantidad
    let tdCant = document.createElement("td");
    //recibiendo la cantidad ingresada por el usuario
    let xcant = parseFloat(prompt(`Ingrese la cantidad del item ${i+1}`));
    //colocando el texto de la cantidad al td
    tdCant.innerHTML = xcant;

    let tdDesc = document.createElement("td");
    let xdesc = prompt(`Ingrese la descripción del item ${i+1}`);
    tdDesc.innerHTML = xdesc;

    let tdPunit = document.createElement("td");
    let xpunit = parseFloat(prompt(`Ingrese el P. Unit del item ${i+1}`));
    tdPunit.innerHTML = `S/.${xpunit}`;

    let tdPtotal = document.createElement("td");
    let xptotal = xcant * xpunit;
    tdPtotal.innerHTML = `S/.${xptotal}`;
    //acumulando el precio total de la compra
    pFinal = pFinal + xptotal;
    //Insertando las columnas en cada iteracion
    //a la fila creada
    tr.appendChild(tdNro);
    tr.appendChild(tdCant);
    tr.appendChild(tdDesc);
    tr.appendChild(tdPunit);
    tr.appendChild(tdPtotal);
    tabla.appendChild(tr);
}

let trFinal = document.createElement("tr");
let tdTituloFinal = document.createElement("td");
tdTituloFinal.innerHTML = `PRECIO TOTAL`;
tdTituloFinal.colSpan = 4;
let tdMontoFinal = document.createElement("td");
tdMontoFinal.innerHTML = `S/. ${pFinal}`;

trFinal.appendChild(tdTituloFinal);
trFinal.appendChild(tdMontoFinal);
tabla.appendChild(trFinal);