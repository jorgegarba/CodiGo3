// REGISTRO CONTROLLER
import { Request, Response } from 'express';
import {Registro, SlotPlaya, Playa} from './../config/sequelize';
var Sequelize = require('sequelize');
var moment = require('moment');

const Op = Sequelize.Op;

export var registro_controller = {
    // Obtener todos los registros dado el id del slotPlaya
    getAllRegistrosBySlotId:(req:Request,res:Response)=>{
        const {slotp_id} = req.params;
        Registro.findAll({
            include:[{
                model:SlotPlaya,
                where:{
                    slotp_id:slotp_id
                },
                include:[{
                    model:Playa
                }]
            }]
        }).then((respuesta:any)=>{
            res.send(respuesta);
        })
    },
    // Obtener todos los registros de un ':slotp_id' 
    // dada una fecha ':dia' (Ejm: '2019-05-06')
    // Ejm de Ruta /registro/slot/:slotp_id/fecha/:dia
    getAllRegByDateBySlotId:(req:Request,res:Response)=>{
        const {slotp_id,dia} = req.params;

        // calcular fecha actual
        const actual = moment().format(`${dia} 00:00:00`);
        // calcular fecha actual mas un dia
        const tomorrow = moment(actual).add(1,'days').format('YYYY-MM-DD HH:mm:ss');
        
        Registro.findAll({
            where:{
                reg_fechin:{
                    [Op.gte]: actual,
                    [Op.lt]:  tomorrow,
                }
            },
            include:[{
                model:SlotPlaya,
                where:{
                    slotp_id:slotp_id
                }
            }]
        }).then((response:any)=>{
            res.send(response);
        })
    }
}