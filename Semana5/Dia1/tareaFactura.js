window.addEventListener("load",function(){
    //declaracion de variables de los elementos html
    var xinputNombre = document.getElementById("inputNombre");
    var xinputFecha = document.getElementById("inputFecha");
    var xinputRUC = document.getElementById("inputRUC");
    var xinputCantidad = document.getElementById("inputCantidad");
    var xinputDescripcion = document.getElementById("inputDescripcion");
    var xselectCategoria = document.getElementById("selectCategoria");
    var xinputPUnitario = document.getElementById("inputPUnitario");
    var xbtnAgregar = document.getElementById("btnAgregar");
    var xtabla = document.getElementById("tabla");
    //creando el modelo de un objeto factura
    //que luego será guardado en el localStorage
    var factura = {
        nombre:"",
        ruc:"",
        fecha:"",
        productos: []
    };

    /**
     * Funcion para traer el objeto factura del localStorage
     * y asignar toda esa data a nuestra variable factura
     * Si en el localStorage, no hubiera ningun objeto,
     * la variable factura, se quedará vacía.
     */
    function construirFactura(){
        //tomando el contenido de "factura" en el storage
        let stringFacturaStorage = localStorage.getItem("factura");
        //validando si esta factura existia o no.
        // si existe nos devolverá el string
        if(stringFacturaStorage !== null){
            //convirtiendo el string de la factura del storage
            // a un objeto JSON
            let jsonFacturaStorage = JSON.parse(stringFacturaStorage);
            factura = jsonFacturaStorage;
            dibujarTablaConStorage();
        }else{//si no existe, nos devolverá null
            console.log("no habia storage");
        }
    }

    function dibujarTablaConStorage(){
        for(let i = 0; i<factura.productos.length; i++){
            let xtr = document.createElement("tr");
            let xtdNro = document.createElement("td");
            xtdNro.innerHTML = i+1;

            let xtdCantidad = document.createElement("td");
            xtdCantidad.innerHTML = factura.productos[i].cantidad;
            
            let xtdDescripcion = document.createElement("td");
            // si queremos que el td sea editable, coloquemos la siguiente
            //linea de configuracion
            // xtdDescripcion.setAttribute("contenteditable","true");
            xtdDescripcion.innerHTML = factura.productos[i].descripcion;

            let xtdPUnitario = document.createElement("td");
            xtdPUnitario.innerHTML = factura.productos[i].punitario;

            let xtdPTotal = document.createElement("td");
            xtdPTotal.innerHTML = factura.productos[i].pstotal;
            
            xtr.appendChild(xtdNro);
            xtr.appendChild(xtdCantidad);
            xtr.appendChild(xtdDescripcion);
            xtr.appendChild(xtdPUnitario);
            xtr.appendChild(xtdPTotal);

            xtabla.appendChild(xtr);
        }
    }

    //asignando el evento click al boton agregar
    xbtnAgregar.addEventListener("click",function(){
        //creando el objeto detalle
        //representa a un renglon de nuestra factura(1 item nuevo)
        let detalle = {
            cantidad: xinputCantidad.value,
            descripcion: xinputDescripcion.value,
            categoria: xselectCategoria.value,
            punitario: xinputPUnitario.value,
            pstotal: (xinputCantidad.value * xinputPUnitario.value)
        };
        // Creando un <tr></tr> llamado xtr
        let xtr = document.createElement("tr");
        //guardamos en un arreglo llamado xtrsActuales
        //todos los tr's que tiene la tabla actualmente
        let xtrsActuales = document.querySelectorAll("table tr");
            
        // Creando 5 <td></td> llamados....
        let xtdNro = document.createElement("td");
        xtdNro.innerHTML = xtrsActuales.length;

        let xtdCant = document.createElement("td");
        xtdCant.innerHTML = detalle.cantidad;

        let xtdDescripcion = document.createElement("td");
        xtdDescripcion.innerHTML = detalle.descripcion;

        let xtdPUnitario = document.createElement("td");
        xtdPUnitario.innerHTML = detalle.punitario;

        let xtdPTotal = document.createElement("td");
        xtdPTotal.innerHTML = detalle.pstotal;

        //agregando las columnas(td-s) a la fila(tr)
        xtr.appendChild(xtdNro);
        xtr.appendChild(xtdCant);
        xtr.appendChild(xtdDescripcion);
        xtr.appendChild(xtdPUnitario);
        xtr.appendChild(xtdPTotal);
        // Agregando la fila(tr) a la tabla (table)
        xtabla.appendChild(xtr);
        
        //insertando el nuevo detalle al arreglo de productos 
        // del objeto global de la factura
        factura.productos.push(detalle);
        //agregando o reemplazando la clave factura
        //en el localstorage
        localStorage.setItem("factura",JSON.stringify(factura));

    });

    construirFactura();

});