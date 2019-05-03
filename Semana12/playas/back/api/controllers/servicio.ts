// SERVICIO CONTROLLER
import {Request, Response} from 'express';
import {Servicio} from './../config/sequelize';

export var servicio_controller = {
    getAll: (req:Request,res:Response)=>{
        Servicio.findAll().then((servicios:any)=>{
            let response = {
                message:"ok",
                content:servicios
            };
            res.status(404).json(response);
        }).catch((error:any)=>{
            console.log("error");
        })
    },
    create: (req:Request,res:Response)=>{

        Servicio.create(req.body).then((servicioCreado:any)=>{
            if(servicioCreado){
                let response = {
                    message:'created',
                    content:servicioCreado
                };
                res.status(201).json(response);
            }else{
                let response = {
                    message:'error',
                    content: null
                };
                res.status(500).json(response);
            }
        })
    },
    getById: (req:Request,res:Response)=>{
        let {serv_id} = req.params;

        Servicio.findByPk(serv_id).then((servicio:any)=>{
            if(servicio){
                let response = {
                    message:'found',
                    content: servicio
                };
                res.status(200).json(response);
            }else{
                let response = {
                    message:'not found',
                    content: null
                };
                res.status(200).json(response);
            }
        })
    }
};