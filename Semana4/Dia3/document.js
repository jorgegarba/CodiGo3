//El objeto document, sirve para manipular cualquier
//elemento del DOM
//SELECTORES
//getElementById([id del elemento]);
//Obtiene un elemento dado su ID
var xdiv1 = document.getElementById("div1");
console.log(xdiv1);
//getElementsByClassName([nombre de la clase del/los elemento/s])
//Obtiene un arreglo de elementos dado el nombre da la clase
var xrojo = document.getElementsByClassName("rojo");
console.log(xrojo);
//getElementsByTagName([nombre de la etiqueta del/los elemento/s'])
//Obtiene un arreglo de elementos dado el nombre de la etiqueta
var xdivs = document.getElementsByTagName("div");
console.log(xdivs);
//querySelector([selector como en CSS3])
//Obtiene un elemento que coincida con el selector 
//Como si estariamos usando CSS3
var xiddiv1 = document.querySelector("#div1");
console.log(xiddiv1);
//querySelectorAll([selector como en CSS3])
//Obtiene un conjunto de elementos que coincidan con el selector
//Como si estaríamos usando CSS3
var xrojos = document.querySelectorAll(".rojo");
console.log(xrojos);