$(function(){

    var cuadrado = $(".cuadradito:eq(0)");
    
    var cuadrado2 = $(".cuadradito2:eq(0)");

    var bolita = $(".bolita:eq(0)");

    var input = $("#nombre");

    var body = $("body:eq(0)");


    //mouseover
    // JAVASCRIPT NATIVO
    // cuadrado.addEventListener("mouseover",function(){});
    // cuadrado.onmouseover = function(){};
    // JQUERY
    // cuadrado.mouseover(function(){});
    cuadrado.mouseover(function(){
        $(this).css("border-radius","50%");
    });
    cuadrado.mouseout(function(){
        $(this).css("border-radius","0%");
    });

    //dblclick=> doble click al elemento
    cuadrado.dblclick(function(){
        $(this).css("background-color","magenta");
    });


    //hover => recibe dos funciones, una para mouseover
    // y la otra para mouseout;
    cuadrado2.hover(function(){
        $(this).css("transform","rotate(50deg)");
    },function(){
        $(this).css("transform","rotate(0deg)");
    });


    bolita.click(function(){
        //obteniendo el valor de una propiedad en css
        // si enviamos un parametro a css("height"),
        //obtenemos su valor, en este caso EJEMPLO "30px",
        var altura = $(this).css("height");
        //Separamos el numero entero obteniendo un arreglo
        // de la siguiente forma [30,x], nos quedamos 
        //con la posicion 0
        altura = +altura.split("p")[0];
        //Sumamos 3 como logica de negocio
        altura = altura + 3;
        // modificamos el tamaño de la altura y ancho en px
        // que acabamos de sumar.
        $(this).css("height",`${altura}px`);
        $(this).css("width",`${altura}px`);
    });

    //contextmenu => click derecho
    bolita.contextmenu(function(evento){
        //preventDeault() => detiene el flujo normal del evento
        evento.preventDefault();
        //obteniendo el valor de una propiedad en css
        // si enviamos un parametro a css("height"),
        //obtenemos su valor, en este caso EJEMPLO "30px",
        var altura = $(this).css("height");
        //Separamos el numero entero obteniendo un arreglo
        // de la siguiente forma [30,x], nos quedamos 
        //con la posicion 0
        altura = +altura.split("p")[0];
        //Sumamos 3 como logica de negocio
        altura = altura - 3;
        // modificamos el tamaño de la altura y ancho en px
        // que acabamos de sumar.
        $(this).css("height",`${altura}px`);
        $(this).css("width",`${altura}px`);
    });




    let miFocus = function(){
        $(this).css("outline","none");
        $(this).css("border","2px solid gray");
        $(this).css("border-radius","8px");
        $(this).css("padding","10px");
    };
    let miBlur = function(){
        $(this).css("outline","none");
        $(this).css("border","1px solid gray");
        $(this).css("border-radius","0px");
        $(this).css("padding","0px");
    };
    input.focus(miFocus);
    input.blur(miBlur);

    body.mousemove(function(evento){
        let otrabolita = document.createElement("div");
        otrabolita.setAttribute("class","bolita");
        otrabolita.style.position = "absolute";
        otrabolita.style.left = `${evento.clientX}px`;
        otrabolita.style.top = `${evento.clientY}px`;

        //append JQuery, es equivalente a appendChild() en Javascript
        $(this).append(otrabolita);

    });

});