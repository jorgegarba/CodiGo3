$(function(){
    var registros = new Array();

    /**
     * Función que genera la plantilla de un li : listItem
     * 
     * @param {Registro} objRegistro recibe todo un registro
     */
    let generarLi = function(objRegistro){
        return `<li class="list-group-item d-flex justify-content-between align-items-center">                            
                    <strong><i class="fas fa-car fa-2x"></i> ${objRegistro.regVehiculo.placa}</strong>
                    <span class="badge badge-dark p-2">${objRegistro.regVehiculo.categoria}</span>
                    <span class="badge badge-dark p-2">${objRegistro.regFechfin}</span>
                    <span class="badge badge-dark p-2">${objRegistro.regVehiculo.color}</span>
                </li>`;
    }

    let imprimirRegistros = function(){
        $("#listRegistros").html("");
        for(let i=0 ; i<registros.length; i++){
            let contenido = generarLi(registros[i]);
            $("#listRegistros").append(contenido);
        }
        
    };

    let registrar = function(){
        let objVehiculo = new Vehiculo($("#inputPlaca").val(),
                                        $("#inputColor").val(),
                                        $("#inputCategoria").val());
        let objRegistro = new Registro(0,new Date(),new Date(),objVehiculo,0);
        registros.push(objRegistro);
        imprimirRegistros();
    };


    $("#btnRegistrar").click(registrar);
});