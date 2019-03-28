window.addEventListener("load",function(){
    var btnAjax = document.querySelector("#btnAjax");
    var cargando = document.querySelector("#carga");
    var tabla = document.querySelector("#tabla");
    
    function cargarAJAX(){
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
                    let tabla = document.getElementById("tabla");
                    dibujarFilas(jsoncompleto.data,tabla);
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

    function dibujarFilas(data,tabla){
        for(let i=0;i<data.length;i++){
            let tr = document.createElement("tr");
            tr.innerHTML = `<td>${data[i].id}</td>
                            <td>${data[i].first_name}</td>
                            <td>${data[i].last_name}</td>
                            <td><img src="${data[i].avatar}"/></td>`;
            tabla.appendChild(tr);
        }
    }

    btnAjax.onclick = cargarAJAX;

});