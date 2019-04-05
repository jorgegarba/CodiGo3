$(function(){
    // Arreglo de Registros
    // es la base de datos de nuestro proyecto
    // almacenará objetos de tipo Registro
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
                    <span class="badge badge-dark p-2">${objRegistro.getHoraEntrada()}</span>
                    <span class="badge badge-dark p-2">${objRegistro.regVehiculo.color}</span>
                </li>`;
    }

    /**
     * Función que dibuja o imprime los registros en el group list
     */
    let imprimirRegistros = function(){
        /**
         * 1. Limpiar o borrar todo el contenido del UL o contenedor
         * de los registros
         */
        $("#listRegistros").html("");
        /**
         * 2. Iterar el arreglo global de registros
         */
        for(let i=0 ; i<registros.length; i++){
            /**
             * 3. en cada iteración llamamos a la función generarLi enviándole
             * un ojbeto registro en la posición indicada para obtener
             * la plantilla de un li
             */
            let contenido = generarLi(registros[i]);
            /**
             * 4. En cada iteración, agregamos el li generado en el paso
             * anterior al contenedor de registros.
             */
            $("#listRegistros").append(contenido);
        }
    };

    /**
     * Función que agrega un registro nuevo al arreglo de registros
     * Par esto, crea un objeto Vehiculo y los demás datos que necesita
     * el objeto registro
     */
    let registrar = function(){
        /**
         * 1. Se crea el objeto Vehiculo
         */
        let objVehiculo = new Vehiculo($("#inputPlaca").val(),
                                        $("#inputColor").val(),
                                        $("#inputCategoria").val());
        /**
         * 2. Se crea el objeto Registro con el vehiculo creado
         * en el paso 1
         */
        let objRegistro = new Registro(0,new Date(),
                                        new Date(),objVehiculo,0);
        /**
         * 3. Se agrega el registro creado al arreglo global 
         * de registros del programa
         */
        registros.push(objRegistro);
        /**
         * 4. Llamar a la función encargada de imprimir o dibujar
         * los registros.
         */
        imprimirRegistros();
    };


    $("#btnRegistrar").click(registrar);
});