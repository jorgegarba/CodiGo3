// window.onload = function(){
// };

window.addEventListener("load",function(evento){
    var xboton = document.getElementById("btn");
    var xobjetivo = document.getElementById("objetivo");
    var xinput = document.getElementById("miInput");
    var xobjetivo2 = document.getElementById("objetivo2");
    var xselect = document.getElementById("miSelect");
    var xbody = document.querySelector("body");
    var xlapiz = document.querySelector("#lapiz");
    
    xbody.addEventListener("mousemove",function(evento){
        //mousemove => Cuando el mouse se mueve 1px sea en X y/o en Y
        // sobre un elemento
        console.log("X => ",evento.offsetX);
        console.log("Y => ",evento.offsetY);
        xlapiz.style.left = event.clientX+"px";
        xlapiz.style.top = (event.clientY-100)+"px";    
    })


    xobjetivo.addEventListener("mouseover",function(){
        //mouseover => cuando el mouse se sitúa sobre el elemento
        this.style.backgroundColor = "peru";
    });
    xobjetivo.addEventListener("mouseout",function(){
        //mouseout => cuando el mouse se sale del elemento
        this.style.backgroundColor = "brown";
    });
    xinput.addEventListener("focus",function(){
        //focus => cuando el cursor se ubica en el elemento
        this.style.borderBottomColor = "tomato";
        this.style.outline = "none";
    });

    xinput.addEventListener("blur", function(){
        // blur => cuando cursor sale del elemento
        this.style.borderBottomColor = "white";
    });

    xinput.addEventListener("keydown",function(event){
        console.log(`KEYDOWN Una tecla ha sido presionada`);
        console.log(event.keyCode);
        console.log(event.key);
        console.log(String.fromCharCode(event.keyCode));
    });
    xinput.addEventListener("keyup",function(event){
        console.log(`KEYUP Una tecla ha sido libera`);
        console.log(event.keyCode);
        console.log(event.key);
    });
    xinput.addEventListener("keypress",function(event){
        console.log(`KEYPRESS Una tecla ha sido presionada`);
        console.log(event.keyCode);
        console.log(event.key);
        switch(event.key){
            case "a":
                console.log("presionaste a");
                break;
            case "b":
                console.log("presionaste b");
                break;
            default:
                console.log("No presionaste ni a ni b");
        }
    });
    xobjetivo2.addEventListener("dblclick",function(){
        xobjetivo.style.borderRadius = "50%";
    });

    xselect.addEventListener("change",function(evento){
        console.log(evento);
        // value => el valor(value) del option seleccionado
        console.log(this.value);
        //selectedIndex => la posicion del option seleccionado
        console.log(this.selectedIndex);
        //this.options => devuelve un arreglo con las opciones del select
        console.log(this.options);
        //this.options[this.selectedIndex] => devuelve un elemento
        // el cual es el option seleccionado
        console.log(this.options[this.selectedIndex]);
        //this.options[this.selectedIndex].innerHTML => devuelve el texto
        //interno del option <option>ESTE TEXTO</option>
        console.log(this.options[this.selectedIndex].innerHTML);
        xinput.value = this.options[this.selectedIndex].innerHTML;
    });

});