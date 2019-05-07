// SERVICIO CONTROLLER
import { Request, Response } from 'express';
import { Servicio } from './../config/sequelize';

export var servicio_controller = {
    getAll: (req: Request, res: Response) => {
        Servicio.findAll().then((servicios: any) => {
            // CODIGO DE PRUEBA
                servicios.forEach((servicio:any) => {
                    servicio.mostrarIdYNombre();                    
                });
            // !CODIGO DE PRUEBA
            let response = {
                message: "ok",
                content: servicios
            };
            res.status(404).json(response);
        }).catch((error: any) => {
            console.log("error");
        })
    },
    create: (req: Request, res: Response) => {

        Servicio.create(req.body).then((servicioCreado: any) => {
            if (servicioCreado) {
                let response = {
                    message: 'created',
                    content: servicioCreado
                };
                res.status(201).json(response);
            } else {
                let response = {
                    message: 'error',
                    content: null
                };
                res.status(500).json(response);
            }
        })
    },
    getById: (req: Request, res: Response) => {
        let { serv_id } = req.params;

        Servicio.findByPk(serv_id).then((servicio: any) => {
            if (servicio) {
                let response = {
                    message: 'found',
                    content: servicio
                };
                res.status(200).json(response);
            } else {
                let response = {
                    message: 'not found',
                    content: null
                };
                res.status(200).json(response);
            }
        })
    },
    deleteById: (req: Request, res: Response) => {
        Servicio.destroy(
            {
                where: {
                    serv_id: req.params.serv_id
                }
            }
        ).then((cantidad) => {
            if (cantidad > 0) {
                let response = {
                    message: "eliminado",
                    content: cantidad,
                };
                res.status(200).json(response);
            } else {
                let response = {
                    message: "No se ha eliminado ningun registro",
                    content: cantidad,
                };
                res.status(200).json(response);
            }
        })
    },
    update: (req: Request, res: Response) => {
        Servicio.update(req.body,
            {
                where: {
                    serv_id:req.params.serv_id
                }
            }
        ).then((cantidad:any)=>{
            if(cantidad>0){
                let response = {
                    message:'Se modificaron los archivos',
                    content:cantidad
                };
                res.status(200).json(response);
            }else{
                let response = {
                    message:'No se modificaron los archivos',
                    content:cantidad
                };
                res.status(200).json(response);
            }
        })
    }
};