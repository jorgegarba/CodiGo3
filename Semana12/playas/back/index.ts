// importando las rutas
import {servicio_router} from './api/routes/servicio';
import {sequelize} from './api/config/sequelize';
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// configuración de bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



const PUERTO = process.env.PORT || 3000;

app.use('',servicio_router);

app.listen(PUERTO,function(){
    console.log("Servidor corriendo correctamente en el puerto 3000");
    sequelize.sync({force:true}).then(()=>{
        console.log("Base de datos creada con éxito");
    }).catch((error:any)=>{
        console.log(error);
        console.log("Error al crear la base de datos");
    })
});