"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const servicio_1 = require("./../models/servicio");
const playa_1 = require("./../models/playa");
const playaservicio_1 = require("./../models/playaservicio");
const slotplaya_1 = require("./../models/slotplaya");
const registro_1 = require("./../models/registro");
const usuario_1 = require("./../models/usuario");
const Sequelize = require('sequelize');
exports.sequelize = new Sequelize('playas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-05:00',
    logging: console.log
});
exports.Servicio = servicio_1.servicio_model(exports.sequelize, Sequelize);
exports.Playa = playa_1.playa_model(exports.sequelize, Sequelize);
exports.PlayaServicio = playaservicio_1.playaservicio_model(exports.sequelize, Sequelize);
exports.SlotPlaya = slotplaya_1.slotplaya_model(exports.sequelize, Sequelize);
exports.Registro = registro_1.registro_model(exports.sequelize, Sequelize);
exports.Usuario = usuario_1.usuario_model(exports.sequelize, Sequelize);
//En el modelo PlayaServicio va a crear un campo de nombre 'playa_id'
//este campo será la clave foranea que una PlayaServicio con Playa
exports.PlayaServicio.belongsTo(exports.Playa, { foreignKey: 'playa_id' });
exports.PlayaServicio.belongsTo(exports.Servicio, { foreignKey: 'serv_id' });
exports.SlotPlaya.belongsTo(exports.Playa, { foreignKey: 'playa_id' });
exports.Playa.hasMany(exports.SlotPlaya, { foreignKey: 'playa_id' });
exports.Registro.belongsTo(exports.SlotPlaya, { foreignKey: 'slotp_id' });
exports.SlotPlaya.hasMany(exports.Registro, { foreignKey: 'slotp_id' });
exports.Registro.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
