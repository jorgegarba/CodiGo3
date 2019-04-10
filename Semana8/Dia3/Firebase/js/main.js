window.onload = ()=>{
    // Declaración de Variables
    let btnGetCanchas = $("#btnGetCanchas");
    let btnCrearCanchita = $("#btnCrearCanchita");
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
        data.forEach( fila => {
            // mostrando el id de cada fila
            console.log(`ID: ${fila.key}`);
            // mostrando campos normales
            console.log(`Nombre: ${fila.val().nombre}`);
            console.log(`Direccion: ${fila.val().direccion}`);
        });
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
    // Iniciando Configuración
    iniciarFirebase();
    //asignando el evento click al boton getCanchas
    btnGetCanchas.click(getCanchitas);
    //asignando el evento click al boton crearCanchita
    btnCrearCanchita.click(crearCancha);
};