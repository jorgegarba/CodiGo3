// importando las rutas
import {servicio_router} from './api/routes/servicio';

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
});