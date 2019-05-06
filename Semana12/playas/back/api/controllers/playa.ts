// PLAYA CONTROLLER
import { Request, Response } from 'express';
import { Playa } from './../config/sequelize';
import { SlotPlaya} from './../config/sequelize';
export var playa_controller = {
    /**
     * Función para obtener todos los espacios o slots
     * Dado el id de la playa, es decir, la 'playa_id'
     */
    getAllSlotsByPlayaId:(req:Request,res:Response)=>{
        const {playa_id} = req.params;
        Playa.findAll({
            where:{
                playa_id:playa_id
            },
            include:[{
                model: SlotPlaya,
            }]
        }).then((respuesta:any)=>{
            let response = {
                message:'ok',
                content:respuesta,
            };
            res.status(200).json(response);
        })
    }
}