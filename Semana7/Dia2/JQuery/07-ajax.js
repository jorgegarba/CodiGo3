$(function(){
    /**
     * Función para dobujar la tabla con el metodo GET
     * @param {JSON} usuarios Arreglo de objetos de tipo usuario
     */
    let dibujarTabla = function(usuarios){
        //forma1
        // var tabla = document.createElement("table");
        // tabla.className = "table table-hover table-dark table-bordered"
        //forma2
        var tabla = $("<table></table>");

        //forma2
        tabla.addClass("table table-hover table-dark table-bordered");
        let contenido = `
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Lat - Lng</th>
        </tr>
        `;
        for(let i = 0; i < usuarios.length; i++){
            contenido += "<tr>";
            contenido += `<td>${usuarios[i].id}</td>`;
            contenido += `<td>${usuarios[i].name}</td>`;
            contenido += `<td>${usuarios[i].email}</td>`;
            contenido += `<td>${usuarios[i].address.geo.lat} - ${usuarios[i].address.geo.lng}</td>`;
            contenido += "</tr>";
        }
        //forma1
        // tabla.innerHTML = contenido;
        //forma2
         tabla.html(contenido);

        $("#contenido").append(tabla);
        
    };
    // Evento click del boton GET
    $("#btnGet").click(function(){
        // limpiamos el contenido de la tabla
        // antes de colocar nuevo contenido
        $("#contenido").html("");
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users",
            // url:"https://reqres.in/api/users?page=2",
            timeout:1000,
            data:null,
            success: function(respuesta){
                dibujarTabla(respuesta);
            },
            error: function(error){
                console.error(error);
            },
            beforeSend: function(){
                console.log("antes de realizar la petición");
            }
        });

    });
    /**
     * Dibujar una tabla de una fila en el contenidoPost
     * con el usuario creado
     * @param {JSON} usuario objeto que representa al usuario creado
     */
    let dibujarTablaPost = function(usuario){
        $("#contenidoPost").html("");
        //creamos un elemento con JQuery
        let tabla = $("<table></table>");
        tabla.addClass("table table-hover table-dark");
        let contenido = `
            <tr>
                <th>ID</th>
                <th>Body</th>
                <th>Title</th>
                <th>UserID</th>
            </tr>
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.body}</td>
                <td>${usuario.title}</td>
                <td>${usuario.userId}</td>
            </tr>
        `;
        tabla.html(contenido);
        $("#contenidoPost").append(tabla);
    }
    // Evento click del boton POST
    $("#btnPost").click(function(){
        $.ajax({
            type:"POST",
            contentType: "application/json",
            url:"https://jsonplaceholder.typicode.com/posts",
            timeout:3000,
            data:JSON.stringify({
                title:"s",
                body:"Contenido Extra",
                userId:90,
            }),
            success: function(respuesta){
                dibujarTablaPost(respuesta);
            },
            error: function(error){
                console.error(error);
            },
            beforeSend: function(){
                console.log("antes de realizar la petición");
            }
        });
    });
});