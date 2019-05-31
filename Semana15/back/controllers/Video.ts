// VIDEO CONTROLLER
import { Request, Response, response } from 'express';
import {Video} from './../config/mongoose';

export var video_controller = {
    create:(req: Request, res: Response)=>{
        
    },
    getAll:(req: Request, res: Response)=>{
        Video.find((err,response)=>{
            if(!err){
                res.status(200).json({
                    message:"ok",
                    content:response
                })
            }else{
                res.status(500).json({
                    error:"Error al realizar la consulta"
                })
            }
        })
    },
};