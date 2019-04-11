window.onload = ()=>{
    // Declaración de Variables
    let btnGetCanchas = $("#btnGetCanchas");
    let btnCrearCanchita = $("#btnCrearCanchita");
    let btnEliminarCancha = $('#btnEliminarCancha');
    let contenedor = $('#contenedor');
    let btnGuardarCambios = $("#btnGuardarCambios");
    let btnBuscar = $("#btnBuscar");

    let guardarCambios = ()=>{
        let key = $("#inputKey").val();
        let referencia = firebase.database().ref(`canchitas/${key}`);
        referencia.update({
            nombre: $("#inputNombre").val(),
            direccion: $("#inputDireccion").val(),
        }).then(()=>{
            $("#modalEditarCancha").modal("hide");
        }).catch(()=>{
            alert("Error al modificar los gatos");
        });

    }
    let iniciarFirebase = ()=>{
        var config = {
            apiKey: "AIzaSyDAnKb9WRkacwHQt-VCsJSI08oXF6FjK5Q",
            authDomain: "canchitas-b1d33.firebaseapp.com",
            databaseURL: "https://canchitas-b1d33.firebaseio.com",
            projectId: "canchitas-b1d33",
            storageBucket: "canchitas-b1d33.appspot.com",
            messagingSenderId: "639870880936"
        };
        firebase.initializeApp(config);
    }
    let getCanchitas = ()=>{
        // Conectarse a una base de datos
        // 1.- Tener una referencia al nodo al que conectaremos
        var referencia = firebase.database().ref('canchitas');
        // 2.- Traer la data a partir de la referencia
        // on => Trae la data una vez y cuando algún cambio ocurre en la
        //       base de datos, la función "on" se vuelve a ejecutar
        //       automáticamente. Sin embargo, para que se el cambio suceda
        //       de forma automática, la función "on" debió ser llamada
        //       por lo menos, 1 vez.
        // once => Trae la data una sola vez
        referencia.on('value',(data)=>{
            imprimirData(data);
        });
    }
    let imprimirData = data =>{
        contenedor.html("");
        let tabla = $("<table></table");
        tabla.append(`
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Direccion</th>
            </tr>
        `);
        data.forEach( fila => {
            let tr = $("<tr></tr>");
            let botonEliminar = $("<button></button>");
            let botonEditar = $("<button></button>");
            
            botonEditar.click(()=>{
                // Abriendo el modal de editar cancha
                $("#inputKey").val(fila.key);
                $("#inputNombre").val(fila.val().nombre);
                $("#inputDireccion").val(fila.val().direccion);
                $("#modalEditarCancha").modal('show');
            });
            botonEditar.html("Editar Canchita");
            botonEditar.addClass("btn btn-warning btn-block");


            botonEliminar.html("Eliminar Cancha");
            botonEliminar.addClass("btn btn-danger btn-block");
            botonEliminar.click(()=>{
                eliminarCanchaById(fila.key);
            });
            
            let tdBotonEditar = $("<td></td>");
            tdBotonEditar.append(botonEditar);

            let tdBoton = $("<td></td>");
            tdBoton.append(botonEliminar);


            tr.append(`<td>${fila.key}</td>`);
            tr.append(`<td>${fila.val().nombre}</td>`);
            tr.append(`<td>${fila.val().direccion}</td>`);
            tr.append(`<td><button onClick="eliminarCanchaById('${fila.key}')">Eliminar</button></td>`);
            tr.append(tdBoton);
            tr.append(tdBotonEditar);
            
            tabla.append(tr);
        });
        
        contenedor.append(tabla);
    };
    let crearCancha = ()=>{
        let nombre = "Nueva Cancha";
        let direccion = "Nueva Direccion";
        let referencia = firebase.database().ref("canchitas");
        // INSERTANDO UN REGISTRO EN LA BASE DE GATOS
        // 1.- Generar o crear un nuevo id para el registro
        const nuevoKey = referencia.push().key;
        // 2.- Insertar el registro
        // La funcion child hace referencia a un hijo de la "referencia".
        // La función set() recibe un JSON con la data que se guardará
        // dentro de la referencia
        referencia.child(nuevoKey).set({
            nombre:nombre,
            direccion:direccion,
        },(error)=>{
            if(error){
                console.log(error);
            }
        });
    };
    let eliminarCanchaById = (id)=>{
        let referencia = firebase.database().ref(`canchitas/${id}`);
        referencia.remove().then(()=>{
            console.log("Eliminado Correctamente");
        }).catch((error)=>{
            console.log(error);
        });
    };
    let buscarCancha = (evento)=>{
        evento.preventDefault();
        console.log("En buscar");
        let referencia = firebase.database().ref("canchitas");
        referencia.equalTo(2).on('value',data=>{
            // data.forEach(fila=>{
                console.log(data);
            // });
        });
    };
    // Iniciando Configuración
    iniciarFirebase();
    //asignando el evento click al boton getCanchas
    btnGetCanchas.click(getCanchitas);
    //asignando el evento click al boton crearCanchita
    btnCrearCanchita.click(crearCancha);
    // asignando el evento click al boton eliminarCancha
    // btnEliminarCancha.click(eliminarCanchaById);
    btnGuardarCambios.click(guardarCambios);
    //asignando el evento click al boton de busqueda
    btnBuscar.click(buscarCancha);
};

var eliminarCanchaById = (id)=>{
    let referencia = firebase.database().ref(`canchitas/${id}`);
    referencia.remove().then(()=>{
        console.log("Eliminado Correctamente");
    }).catch((error)=>{
        console.log(error);
    });
}