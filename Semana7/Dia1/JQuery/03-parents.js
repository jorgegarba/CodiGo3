$(function(){
    //find() => sirve para seleccionar los elementos internos
    //de una selección previa.
    //en este caso todos los li's internos de "li.item-2"
    $("li.item-2").find("li").css("color","blue");
    //El ejemplo a continuación, demuestra el uso de jquery y javascript
    // en una misma línea
    // $("li.item-a")[0].innerHTML= "ASDASDASD";
    $("li.item-a").parent().parent().css("border","1px solid red");
});