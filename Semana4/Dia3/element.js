//
var xdiv1 = document.getElementById("div1");
//modificar sus estilos;
//elemento.style.[estilo];
xdiv1.style.color = "#ff8821";
xdiv1.style.padding = "10px";
xdiv1.style.paddingLeft
xdiv1.style.border = "1px solid red";
xdiv1.style.opacity = "0.9";
//Si un estilo en css tiene una sola palabra
// EJM 'border', en JavaScript
// es elemento.style.borde
// Si un estilo en css tiene mas de una palabra
// EJM 'background-image', en JavaScript
// es elemento.backgroundImage

// OTRAS PROPIEDADES DE LOS ELEMENTOS
//clientWidth = obtiene el ancho del elemento
console.log(`Ancho del div ${xdiv1.clientWidth}`);
//clientHeight = obtiene el alto del elemento
console.log(`Ancho del div ${xdiv1.clientHeight}`);
//offsetTop = cantidad de pixeles de 
//desplazo desde el techo de su contenedor
console.log(`Offset Top ${xdiv1.offsetTop}`);
//offsetLeft = cantidad de pixeles de 
//desplazo desde la izquierda de su contenedor
console.log(`Offset Top ${xdiv1.offsetLeft}`);
// className => devuelve o asigna el nombre de la clase
// que tiene el elemento
console.log(`Clase del Div => ${xdiv1.className}`);
//modificando el valor del atributo class
//xdiv1.className = "celeste";
// classList => devuelve un arreglo con las clases del elemento
console.log(xdiv1.classList);
//classList.add([nombre_de_clase]) => agregar una clase al elemento
xdiv1.classList.add("celeste");
//classList.remove([nombre_de_clase])=> elimina una clase al elemento
xdiv1.classList.remove("celeste");
//classList.contains([nombre_de_clase])=> devuelve true o false
//dependiendo de si contiene la clase dada.
console.log(xdiv1.classList.contains("rojo"));
//classList.toogle([nombre_de_clase])=> Si el elemento 
//tiene el nombre de la clase, borra la clase, si no la tiene
// la agrega
setInterval(function(){
    xdiv1.classList.toggle("rojo");
},300);

//MODIFICANDO SU CONTENIDO
//innerHTML => Declara o devuelve el contenido de un elemento
//<elemento>ESTE CONTENIDO</elemento>
console.log(xdiv1.innerHTML);
xdiv1.innerHTML = "CLICK AQUI PARA GANAR DINERO";
