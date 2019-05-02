// SERVICIO CONTROLLER
import {Request, Response} from 'express';
import {Servicio} from './../config/sequelize';
export var servicio_controller = {
    home: (req:Request,res:Response)=>{
        Servicio.findAll().then((servicios:any)=>{
            console.log(servicios);
        }).catch(()=>{
            console.log("error al procesar la consulta");
        })
        res.send("Soy el home de Servicio");
    }
};