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