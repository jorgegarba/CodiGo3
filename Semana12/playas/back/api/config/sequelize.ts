import {servicio_model} from './../models/servicio';
const Sequelize = require('sequelize');

export const sequelize = new Sequelize('playas','root','',{
    host:'localhost',
    dialect:'mysql',
    timezone:'-05:00'
});

export const Servicio = servicio_model(sequelize,Sequelize);



// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

