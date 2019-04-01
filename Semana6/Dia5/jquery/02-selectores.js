//compatible con window.addEventListener("load"....)
$(function () {
    //Selectores
    //selector de ID
    var btnColor = $("#btnColor");
    //selector de etiquetas
    //innerHTML ====> html("texto");
    $("p").html("Nuevo Texto para todos");
    //setteando el texto del parrafo que esta en la posicion 2
    // de todos los parrafos del documento
    $("p:eq(2)").html("Texto para el tercer parrafo");

    btnColor.click(function () {
        //$(this)=> hace referencia al elemento que esta ejecutando 
        // la funcion en la que nos encontramos.
        $(this).html("Me hiciste Click!");
        //css("atributo","valor")=> asigna un nuevo atributo de
        //estilos al elemento
        $(this).css("border-radius", "10px")
            .css("padding", "20px");
        $("p").addClass("text-white");
    });

    $("#btnClases").click(function () {
        //equivalente a elemento.classList.add()
        $("p:eq(0)").addClass("btn")
            .addClass("btn-primary")
            .addClass("btn-block");
            
        $("p").removeClass("text-white");
    });

});