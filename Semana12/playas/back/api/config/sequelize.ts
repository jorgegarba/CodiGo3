import {servicio_model} from './../models/servicio';
const Sequelize = require('sequelize');

const sequelize = new Sequelize('playas','root','',{
    host:'localhost',
    dialect:'mysql',
    timezone:'-05:00'
});

export const Servicio = servicio_model(sequelize,Sequelize);

// force => true cada vez que el proyecto inicie,
// se van a eliminar todas las tablas, contenido y relaciones 
// que tengan, para crearse nuevamente.

sequelize.sync({force:true}).then(()=>{
    console.log("Base de datos creada con éxito");
}).catch((error:any)=>{
    console.log(error);
    console.log("Error al crear la base de datos");
})

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

