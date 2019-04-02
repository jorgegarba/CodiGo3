$(function(){

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

    $("#btnGet").click(function(){
        
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users",
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

});