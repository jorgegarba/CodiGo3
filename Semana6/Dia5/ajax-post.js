window.onload = function(){
    var btnCrear = document.querySelector("#btnCrear");
    var inputNombre = document.querySelector("#inputNombre");
    var inputTrabajo = document.querySelector("#inputTrabajo");
    var alert = document.querySelector("#miAlert");
    var mensaje = document.querySelector("#mensaje");

    btnCrear.onclick = function(){
        let data = {
            name:inputNombre.value,
            job:inputTrabajo.value
        };
        let xhr = new XMLHttpRequest();
        //timeout => maximo tiempo de espera en milisegundos
        //para que el servidor nos de una respuesta
        xhr.timeout = 500;
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                let responseJSON = JSON.parse(xhr.responseText);
                if(responseJSON.job){
                    //exito
                    mensaje.innerHTML = "";
                    mensaje.innerHTML = `El usuario <strong>${responseJSON.name}</strong> ha sido creado :)`;
                    alert.removeAttribute("hidden");
                    alert.setAttribute("class","alert alert-primary alert-dismissible fade show");
                    // if(!alert.classList.contains("alert-primary")){
                    //     alert.classList.add("alert-primary");
                    //     alert.classList.remove("alert-danger");
                    // }
                }else{
                    //error
                    mensaje.innerHTML = "";
                    mensaje.innerHTML = `<strong>Ups! </strong> Ocurrió un error :(`;
                    alert.removeAttribute("hidden");
                    alert.setAttribute("class","alert alert-danger alert-dismissible fade show");

                    // if(alert.classList.contains("alert-primary")){
                    //     alert.classList.remove("alert-primary");
                    //     alert.classList.add("alert-danger");
                    // }
                }
            }
        };
        //ontimeout=> es la función que se ejecuta cuando el tiempo de espera
        //ha excedido
        xhr.ontimeout = function(){
            console.error("ERROR, SE AGOTÓ EL TIEMPO DE ESPERA");
        };

        xhr.open("POST","https://reqres.in/api/users");
        //setRequestHeader => configura las cabeceras que seran
        //enviadas al servidor
        //Debe ser configurado despues de usar la función open();
        xhr.setRequestHeader("Contasdasdspe","application/json");
        xhr.send(JSON.stringify(data));
    }
}