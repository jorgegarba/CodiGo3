window.onload = ()=>{

    let contenedor = document.getElementById("contenedor");

    let obtenerCoords = ()=>{
        // preguntarle al navegador si dispone del objeto
        // de geolocalización
        if(navigator.geolocation){
            // obtener la ubicación actual
            //recibe dos callbacks
            // 1. El primer callback
            // recibe un parametro con la posición de nuestro equipo
            // el primer parámetro tiene un objeto 'coords'
            // el objeto coords tiene una propiedad 'latitude'
            // el objeto coords tiene una propiedad 'longitude'
            // 2. el segundo callback recibe un parámetro que representa
            // un error.
            // navigator.geolocation.getCurrentPosition((pos)=>{
            navigator.geolocation.watchPosition((pos)=>{
                contenedor.innerHTML = `Latitud ${pos.coords.latitude}
                                        Longituf ${pos.coords.longitude}`;
            },  (error)=>{
                switch(error.code){
                    case error.PERMISSION_DENIED:
                        contenedor.innerHTML = "El usuario denegó el permiso para la geolocalización"; 
                        break;
                    case error.POSITION_UNAVAILABLE:
                        contenedor.innerHTML = "La información no está disponible"; 
                        break;
                    case error.TIMEOUT:
                        contenedor.innerHTML = "Tiempo de espera agotado"; 
                        break;
                    case error.UNKNOWN_ERROR:
                        contenedor.innerHTML = "Error desconocido"; 
                        break;
                }
            })           

        }else{
            document.getElementById("contenedor")
            .innerHTML = "No disponemos de geolocalización";
        }
    };
    obtenerCoords();
}

// ejemplo de trabajo con constantes

// const codigos = {
//     ERROR_DE_LOGGIN:9,
//     PUERTO_MYSQL  :3306,
//     PUERTO_HTTP : 80
// };


// let miPuerto = 80;
// if(miPuerto == codigos.PUERTO_HTTP);