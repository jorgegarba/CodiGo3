$(function(){
    // draggable => El elemento podra ser movido de su posición
    // cuando el click esté presionado
    $(".cuadrado").draggable();

    // resizable => El elemento podra ser modificado en tamaño
    $(".cuadrado").resizable();

    //sortable => los elementos podrán ser ordenados
    $(".peliculas").sortable({
        update: function(){
            console.log("La lista ha se ha modificado");
        }
    });

    $(".pequenio").draggable();

    // droppable => hace que el elemento puede recibir
    // a otros elementos en su interior
    $(".grande").droppable({
        drop: function(evento){
            console.log("Soltaron un elemento che!");
            console.log(evento);
            $(this).css("background-color","red");
        }
    });

    $("#btnAnimar").click(function(){
        // $(".objetivo:eq(0)").effect("explode");
        // $(".objetivo:eq(0)").toggle("bind");
        $(".objetivo:eq(0)").toggle("fold");
    });

    $("#imagen").click(function(){
        // $("#body").toggle("bind");
        // $("#body").toggle("slide",2000);
        // $("#body").toggle("drop");
        // $("#body").toggle("puff");
        // $("#body").toggle("fold");
        // $("#body").toggle("scale");
        // $("#body").toogle("shake");
        $("#body").effect("shake",200);
    });

    // tooltip() => hace que el elemento en el que se ejecuta la función,
    // muestre un cuadro de dialogo si y solo si, el elemento
    // tiene el atributo "title" en su etiqueta html
    $("#imagen").tooltip();

    $("#btnModal").click(function(){
        $("#miModal").dialog();
    });
    
});    