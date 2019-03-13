//WINDOW => Representa al navegador
// funcion location => obtiene la ruta actual de la url
document.write(window.location);
var url = window.location + "";
if(url.indexOf("window.html") != -1){
    console.log("Estas en window.html");
}else{
    console.log("NO Estas en window.html");
}
// innerWidth => Devuelve el ancho de la ventana en pixeles
// innerHeight => Devuelve el alto de la ventana en pixeles
document.write(`<p>Ancho de la ventana => ${window.innerWidth}</p>`);
document.write(`<p>Alto de la ventana => ${window.innerHeight}</p>`);
document.write(`<p>Obtener el desplazamiento del
                navegador en el eje x ${window.scrollX}</p>`);
document.write(`<p>Obtener el desplazamiento del
                navegador en el eje y ${window.scrollY}</p>`);
//setTimeOut(funcion, milisegundos)
// Ejecuta la función tras la cantidad de milisegundos que han pasado
// es una funcion asincrona
var y = 0;
setTimeout( function(){
    y = window.scrollY;
    console.log(y);
}, 2000);
// setInterval(function, milisegundos)
// Ejecuta la función cada cantidad de milisegundos;
var intervalo = setInterval(function(){
    console.log(new Date());
},500);

//clearInterval([instancia de setInterval])
//termina el procesos de setInterval
setTimeout(function(){
    clearInterval(intervalo);
},5000)



//open(url)=>Carga la página con una nueva dirección url
var miFuncion = function(){
    open('https://www.fb.com');
};
setTimeout(miFuncion,2000);
