// VIDEO CONTROLLER
import { Request, Response, response } from 'express';
import {Video} from './../config/mongoose';
const jsreport = require('jsreport');

// file system => libreria propia de node para manejar archivos
var fs = require('fs');
// path_module => libreria propia de node para manejar archivos
var path_module = require('path')

export var video_controller = {
    create:(req: Request, res: Response)=>{
        Video.create(req.body).then(response=>{
            if(response){
                res.status(201).json({message:'created',content:response});
            }else{
                res.status(500).json({message:'Error al crear el video'});
            }
        })
    },

    deleteById:(req:Request, res:Response)=>{
        let {id} = req.params;
        Video.findByIdAndDelete(id,(error,objVideo)=>{
            if(!error && objVideo){
                // eliminar el archivo del video
                fs.unlink(`imagenes/${objVideo.vid_img}`,(err)=>{
                    if(!err){
                        res.status(200).json({message:'deleted',content:objVideo});
                    }else{
                        res.status(500).json({error:"error al borrar el video"});
                    }
                });
            }else{
                res.status(500).json({error:"error al borrar el video"});
            }
        })
    },

    uploadImage:(req:Request, res:Response)=>{
        let {id} = req.params;
        if(req.files){
            // archivo => nombre del campo recibido por POSTMAN
            let ruta = req.files.archivo.path;
            let nombreYExtension = ruta.split('\\')[1];
            
            Video.findByIdAndUpdate(id, {vid_img:nombreYExtension},{new:true},(err,respuesta)=>{
                if(!err){
                    res.status(200).json({message:'updated',content:respuesta});
                }else{
                    res.status(500).json({message:'error siñorsh'});
                }
            })
        }else{
            return res.status(200).send({message:"No has seleccionado ningun archivo"});    
        }
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

    getImagenByName:(req:Request, res:Response)=>{
        let ruta = `imagenes/${req.params.name}`;
        let rutaDefault = `imagenes/default.png`;
        if(fs.existsSync(ruta)){
            return res.sendFile(path_module.resolve(ruta));
        }else{
            return res.sendFile(path_module.resolve(rutaDefault));
        }
    },

    getReporte:(req:Request, res:Response)=>{
        jsreport.render({
            template: {
                content: "<h1>Hello world {{this.titulo}}</h1>",
                engine: 'handlebars',
                recipe: 'chrome-pdf'
              },
              data:{titulo:"Titulin"}
        }).then((salida:any)  => {
            salida.stream.pipe(res);
          }).catch((e:any) => {
            res.end(e.message);
        });
    }
};