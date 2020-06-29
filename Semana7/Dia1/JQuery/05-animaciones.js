$(function(){
    var btnAnimar = $("#btnAnimar");
    var objetivo = $("#objetivo");
    var relleno = $("#relleno");
    btnAnimar.click(function(){
        // animate => recibe un JSON con las propiedad
        // de estilos en JavaScript y sus valores,
        // adicionalmente, recibe el tiempo que durará la
        // animación
        objetivo.animate({
            iterador:100
        },{
           duration: 3000,
           step: function(valor){
            objetivo.html(`Cargando ${valor}%`);
            objetivo.css("borderRadius",`${valor/2}%`);
            relleno.css("width",`${valor}%`);
           }
        });
    });

    function mover(elemento,atributo,valor){
        elemento.animate({i:valor},{
            duration:2000 ,
            step: function(valor){
                elemento.css(atributo,`${valor}px`);
            },
            queue:true

        });        
    }
    mover(objetivo,"marginTop",300);
    mover(objetivo,"marginLeft",300);
});