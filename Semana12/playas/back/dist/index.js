"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importando las rutas
const servicio_1 = require("./api/routes/servicio");
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// configuración de bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PUERTO = process.env.PORT || 3000;
app.use('', servicio_1.servicio_router);
app.listen(PUERTO, function () {
    console.log("Servidor corriendo correctamente en el puerto 3000");
});
