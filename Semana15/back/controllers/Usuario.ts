// USUARIO CONTROLLER
import { Request, Response } from 'express';
import {Usuario} from './../config/mongoose';
export var usuario_controller = {
    getAll: (req: Request, res: Response) => {
        Usuario.find((error,response)=>{
            if(error){
                res.status(500).json({
                    error:"Error en el servidor"
                });
            }else{
                res.status(200).json({
                    content:response,
                    message:"ok"
                })
            }
        })
    },
    create:(req: Request, res: Response)=>{
        let objUsuario = new Usuario(req.body);
        objUsuario.save(function(error,usuarioCreado){
            if(error){
                res.status(500).json({
                    error:"error al crear el usuario",
                });
            }else{
                res.status(201).json({
                    message:"created",
                    content:usuarioCreado
                });
            }
        });
    },
    updateById:(req: Request, res: Response)=>{
        Usuario.findByIdAndUpdate(req.body._id,req.body,{new:true},(error,actualizado)=>{
            if(!error){
                res.status(200).json({
                    message:"updated",
                    content:actualizado
                });
            }else{
                res.status(500).json({
                    error:"Hubo un error en la actualización"
                });
            }
        })
    },
};