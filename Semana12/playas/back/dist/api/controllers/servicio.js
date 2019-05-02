"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../config/sequelize");
exports.servicio_controller = {
    home: (req, res) => {
        sequelize_1.Servicio.findAll().then((servicios) => {
            console.log(servicios);
        }).catch(() => {
            console.log("error al procesar la consulta");
        });
        res.send("Soy el home de Servicio");
    }
};
