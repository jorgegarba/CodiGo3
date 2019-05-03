// importando las rutas
import { servicio_router } from './api/routes/servicio';
import { sequelize } from './api/config/sequelize';


var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// configuración de bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



const PUERTO = process.env.PORT || 3000;

// usando las rutas importadas
app.use('/api', servicio_router);



app.listen(PUERTO, function () {
    console.log("Servidor corriendo correctamente en el puerto 3000");
    // force => true cada vez que el proyecto inicie,
    // se van a eliminar todas las tablas, contenido y relaciones 
    // que tengan, para crearse nuevamente.

    // force => false cada vez que el proyecto inicie,
    // no elmina ninguna tabla de la base de datos, sin embargo,
    // si tenemos una tabla recientemente creada.
    // la función sync, la crea en la base de datos.
    sequelize.sync({ force: false }).then(() => {
        console.log("Base de datos creada con éxito");
    }).catch((error:any) => {
        console.log(error);
        console.log("Error al crear la base de datos");
    })
});