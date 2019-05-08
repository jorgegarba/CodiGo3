// importando las rutas
import { servicio_router } from './api/routes/servicio';
import { playa_router } from './api/routes/playa';
import { registro_router } from './api/routes/registro';
import { auth_router } from './api/routes/auth';

import { sequelize } from './api/config/sequelize';
import { NextFunction, Request, Response } from 'express';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// configuración de bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PUERTO = process.env.PORT || 3000;
// CONFIGURANDO EL CORS
app.use((req:Request,res:Response,next:NextFunction)=>{
    res.header('Access-Control-Allow-Origin','http://localhost:4200');
    res.header('Access-Control-Allow-Headers','Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods','GET, POST');
    res.header('Allow','GET, POST');
    next();
});

// usando las rutas importadas
app.use('/api', servicio_router);
app.use('/api', playa_router);
app.use('/api', registro_router);
app.use('/api', auth_router);


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