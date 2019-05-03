"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const servicio_1 = require("./../models/servicio");
const Sequelize = require('sequelize');
exports.sequelize = new Sequelize('playas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-05:00'
});
exports.Servicio = servicio_1.servicio_model(exports.sequelize, Sequelize);
// force => true cada vez que el proyecto inicie,
// se van a eliminar todas las tablas, contenido y relaciones 
// que tengan, para crearse nuevamente.
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
