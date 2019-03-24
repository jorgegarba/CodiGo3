function generarPersonas(){
    var nombres = ['Jorge','Mario','Rebeca','Jhony','Jenny','Roberto'];
    var apellidos = ['Caceres','Montesinos','Fernandez','Ocsa','Taso'];
    var personas = [];
    for(var i = 0 ; i < 10; i++){
        var personaTmp = {
            nombre:'',
            apellido:'',
            edad:0
        };

        var posNombre = Math.floor(Math.random() * (nombres.length));
        personaTmp.nombre = nombres[posNombre];

        var posApe = Math.floor(Math.random() * (apellidos.length));
        personaTmp.apellido = apellidos[posApe];

        var randomEdad = Math.floor(Math.random() * 120) + 0;
        personaTmp.edad = randomEdad;

        personas.push(personaTmp);
    }

    return personas;
}

function agregarSueldo(personas,imprimir){
    if(personas.length == 0){
        let mensaje = "Error el arreglo esta vacio";
        imprimir(mensaje);
    }else{
        for(let i = 0 ; i < personas.length; i++){
            personas[i].edad = 30;
            personas[i].sueldo = 5000.00;
        }
        imprimir(null,personas);
    }    
}

var misPersonas = generarPersonas();
agregarSueldo(misPersonas,function(error,nuevasPersonas){
    if(error != null){
        console.log(error);
    }else{
        console.log(nuevasPersonas);
    }
});
