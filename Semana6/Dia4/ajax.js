window.addEventListener("load",function(){
    var btnAjax = document.querySelector("#btnAjax");
    var btnAjaxPost = document.querySelector("#btnAjaxPost");
    var cargando = document.querySelector("#carga");
    var tabla = document.querySelector("#tabla");
    var tbody = document.querySelector("#tbody");
    
    function cargarAJAX(){
        //limpiando tbody
        tbody.innerHTML = "";

        cargando.removeAttribute("hidden");
        // Creando un obj XMLHttpRequest
        // Imaginemos que xhr tendrá el contenido
        // de una página
        var xhr = new XMLHttpRequest();
        //configurar los estados por los que la variable
        //xhr va a pasar desde su creación hasta
        // el fin de la comunicación con el servidor.
        
        //La función onreadystatechange se ejecuta
        //cada vez que la variable readyState(variable que indica el 
        //estado de mi request), cambia de valor
        xhr.onreadystatechange = function(){
            switch(xhr.readyState){
                case 1:
                    //algo
                    break;
                case 2:
                    //algo
                    break;
                case 3:
                    //algo
                    break;
                case 4:
                // response=> descarga el 100% contenido del recurso
                //            ejm: incluido el <!DOCTYPE>
                // responseText=> descarga el contenido del cuerpo 
                //            del recurso ejm, contenido del <body>
                //JSON.stringify => convierte un JSON a STRING
                //JSON.parse => convierte un STRING a JSON
                    let jsoncompleto = JSON.parse(xhr.responseText);
                    dibujarFilas(jsoncompleto.data,tbody);
                    tabla.removeAttribute("hidden");
                    cargando.setAttribute("hidden","hidden");
            }
        };
        //open => configura el verbo HTTP y la dirección
        // a consumir.
        xhr.open("GET","https://reqres.in/api/users?page=2");
        //send(), envía cabeceras y contenidos a la ruta de 
        //la función open, y abre dicha ruta en la variable xhr
        xhr.send(null);
    }

    function traerImagen(imagen,url){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            switch(xhr.readyState){
                case 4:
                    imagen.setAttribute("src",url);
            }
        };
        xhr.open("GET",url);
        xhr.send(null);
    }

    function dibujarFilas(data,tbody){
        for(let i=0;i<data.length;i++){
            let tr = document.createElement("tr");
            tr.innerHTML = `<td>${data[i].id}</td>
                            <td>${data[i].first_name}</td>
                            <td>${data[i].last_name}</td>`;
            let imagen = document.createElement("img");
            let tdImagen = document.createElement("td");
            imagen.setAttribute("src","./cargando.gif");
            tdImagen.appendChild(imagen);
            tr.appendChild(tdImagen);
            tbody.appendChild(tr);
            traerImagen(imagen,data[i].avatar);
        }
    }

    btnAjax.onclick = cargarAJAX;




});