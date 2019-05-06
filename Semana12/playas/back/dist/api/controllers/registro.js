"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../config/sequelize");
var Sequelize = require('sequelize');
var moment = require('moment');
const Op = Sequelize.Op;
exports.registro_controller = {
    // Obtener todos los registros dado el id del slotPlaya
    getAllRegistrosBySlotId: (req, res) => {
        const { slotp_id } = req.params;
        sequelize_1.Registro.findAll({
            include: [{
                    model: sequelize_1.SlotPlaya,
                    where: {
                        slotp_id: slotp_id
                    },
                    include: [{
                            model: sequelize_1.Playa
                        }]
                }]
        }).then((respuesta) => {
            res.send(respuesta);
        });
    },
    // Obtener todos los registros de un ':slotp_id' 
    // dada una fecha ':dia' (Ejm: '2019-05-06')
    // Ejm de Ruta /registro/slot/:slotp_id/fecha/:dia
    getAllRegByDateBySlotId: (req, res) => {
        const { slotp_id, dia } = req.params;
        // calcular fecha actual
        const actual = moment().format(`${dia} 00:00:00`);
        // calcular fecha actual mas un dia
        const tomorrow = moment(actual).add(1, 'days').format('YYYY-MM-DD HH:mm:ss');
        sequelize_1.Registro.findAll({
            where: {
                reg_fechin: {
                    [Op.gte]: actual,
                    [Op.lt]: tomorrow,
                }
            },
            include: [{
                    model: sequelize_1.SlotPlaya,
                    where: {
                        slotp_id: slotp_id
                    }
                }]
        }).then((response) => {
            res.send(response);
        });
    }
};
