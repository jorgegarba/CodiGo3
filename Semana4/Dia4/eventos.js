//Evento => es una funcion que se ejecuta tras capturar
//una accion en un elemento.

// onload => funcion que se ejecuta
// cuando todos los elementos internos han terminado de cargar
window.onload = function(){
    // funcion para la forma 1
    // function cambiarColor(){
    //     var xbody = document.querySelector("body");
    //     xbody.style.backgroundColor = "aquamarine";
    // }
    var xdiv = document.getElementById("miDiv");
    // forma 1 => referenciando a una funcion
    // xdiv.onclick = cambiarColor;
    xdiv.onclick = function(){
        // querySelector => selecciona UN(01) elemento con las reglas
        // de CSS3
        var xbody = document.querySelector("body");
        xbody.style.backgroundColor = "aquamarine";
    }

    //  addEventListener(nombre_del_evento,funcion_a_ejecutar
    // el nombre del evento se asigna sin el prefijo "on"
    var xdiv2 =  document.getElementById("miDiv2");
    xdiv2.addEventListener("click",function(){
        // querySelector => selecciona UN(01) elemento con las reglas
        // de CSS3
        var xbody = document.querySelector("body");
        xbody.style.backgroundColor = "skyblue";
    });

    var xdiv3 = document.getElementById("miDiv3");
    xdiv3.onclick = function(evento){
        console.log(evento);
        // target => el elemento que recibió el evento
        console.log("Target=> ", evento.target);
        // altKey => true si el click fue hecho presionando la tecla alt
        // altKey => false si fue un click limpio
        console.log("Click + Alt=> ", evento.altKey);
        // ctrlKey => true si el click fue hecho presionando la tecla ctrl
        // ctrlKey => false si fue un click limpio
        console.log("Click + Ctrl=> ", evento.ctrlKey);
        // shiftKey => true si el click fue hecho presionando la tecla shift
        // shiftKey => false si fue un click limpio
        console.log("Click + Shift=> ", evento.shiftKey);
        
        // clientX y clientY => coordenadas del mouse en relacion a la ventana
        console.log(`Mouse en X (en la ventana) => ${evento.clientX}`);
        console.log(`Mouse en Y (en la ventana) => ${evento.clientY}`);
        // offsetX y offsetY => coordenadas del mouse en relaación al elemento
        console.log(`Mouse en X (en relacion al elemento) => ${evento.offsetX}`);
        console.log(`Mouse en Y (en relacion al elemento) => ${evento.offsetY}`);

    };

    var body = document.getElementById("miBody");
    body.addEventListener("click",function(evento){
        let circulo = document.createElement("div");
        circulo.style.width = "20px";
        circulo.style.height = "20px";
        circulo.style.borderRadius = "50%";
        circulo.style.backgroundColor = "red";
        circulo.style.position = "absolute";
        circulo.style.left = `${evento.clientX}px`;
        circulo.style.top = `${evento.clientY}px`;
        body.appendChild(circulo);
    });
}
