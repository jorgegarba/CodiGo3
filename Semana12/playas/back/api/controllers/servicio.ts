// SERVICIO CONTROLLER
import {Request, Response} from 'express';
import {Servicio} from './../config/sequelize';
export var servicio_controller = {
    home: (req:Request,res:Response)=>{
        
        res.send("Soy el home de Servicio");
    }
};