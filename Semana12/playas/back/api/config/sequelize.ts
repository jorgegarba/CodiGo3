import {servicio_model} from './../models/servicio';
import {playa_model} from './../models/playa';
import {playaservicio_model} from './../models/playaservicio';
import {slotplaya_model} from './../models/slotplaya';
import {registro_model} from './../models/registro';
import {usuario_model} from './../models/usuario';


const Sequelize = require('sequelize');

export const sequelize = new Sequelize('playas','root','',{
    host:'localhost',
    dialect:'mysql',
    timezone:'-05:00'
});

export const Servicio = servicio_model(sequelize,Sequelize);
export const Playa = playa_model(sequelize,Sequelize);
export const PlayaServicio = playaservicio_model(sequelize,Sequelize);

export const SlotPlaya = slotplaya_model(sequelize,Sequelize);
export const Registro = registro_model(sequelize,Sequelize);
export const Usuario = usuario_model(sequelize,Sequelize);

//En el modelo PlayaServicio va a crear un campo de nombre 'playa_id'
//este campo será la clave foranea que una PlayaServicio con Playa
PlayaServicio.belongsTo(Playa, {foreignKey:'playa_id'});
PlayaServicio.belongsTo(Servicio, {foreignKey:'serv_id'});

SlotPlaya.belongsTo(Playa,{foreignKey:'playa_id'});

Registro.belongsTo(SlotPlaya,{foreignKey:'slotp_id'});
Registro.belongsTo(Usuario,{foreignKey:'usu_id'});


// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

