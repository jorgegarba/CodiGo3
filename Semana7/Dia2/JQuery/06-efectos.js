$(function(){
    var btnOcultar = $("#btnOcultar");
    var btnMostrar = $("#btnMostrar");
    var btnToggle = $("#btnToggle");
    var cuadrado = $("#cuadrado");
    btnOcultar.click(function(){
        //hide => oculta el elemento
        // cuadrado.hide('slow');
        //fadeOut => oculta el elemento(TRANSPARENCIA)
        // cuadrado.fadeOut('slow');
        //slideUp=> oculta el elemento (recorta la altura)
        cuadrado.slideUp('slow');
    });
    btnMostrar.click(function(){
        //show => muestra el elemento
        // cuadrado.show('slow');
        //fadeIn => muestra el elemento(TRANSPARENCIA)
        // cuadrado.fadeIn('slow');
        //slideDown
        cuadrado.slideDown('slow');
    })
    btnToggle.click(function(){
        //toggle, oculta y muestra el elemento
        // cuadrado.toggle('slow');
        // fadeToogle => oculta y muestra con el efecto fade
        // cuadrado.fadeToggle('slow');
        //slideToogle => oculta y muestra con el efecto slide
        cuadrado.slideToggle('slow');
    })
});