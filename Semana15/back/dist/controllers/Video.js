"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("./../config/mongoose");
const jsreport = require('jsreport');
// file system => libreria propia de node para manejar archivos
var fs = require('fs');
// path_module => libreria propia de node para manejar archivos
var path_module = require('path');
exports.video_controller = {
    create: (req, res) => {
        mongoose_1.Video.create(req.body).then(response => {
            if (response) {
                res.status(201).json({ message: 'created', content: response });
            }
            else {
                res.status(500).json({ message: 'Error al crear el video' });
            }
        });
    },
    deleteById: (req, res) => {
        let { id } = req.params;
        mongoose_1.Video.findByIdAndDelete(id, (error, objVideo) => {
            if (!error && objVideo) {
                // eliminar el archivo del video
                fs.unlink(`imagenes/${objVideo.vid_img}`, (err) => {
                    if (!err) {
                        res.status(200).json({ message: 'deleted', content: objVideo });
                    }
                    else {
                        res.status(500).json({ error: "error al borrar el video" });
                    }
                });
            }
            else {
                res.status(500).json({ error: "error al borrar el video" });
            }
        });
    },
    uploadImage: (req, res) => {
        let { id } = req.params;
        if (req.files) {
            // archivo => nombre del campo recibido por POSTMAN
            let ruta = req.files.archivo.path;
            let nombreYExtension = ruta.split('\\')[1];
            mongoose_1.Video.findByIdAndUpdate(id, { vid_img: nombreYExtension }, { new: true }, (err, respuesta) => {
                if (!err) {
                    res.status(200).json({ message: 'updated', content: respuesta });
                }
                else {
                    res.status(500).json({ message: 'error siñorsh' });
                }
            });
        }
        else {
            return res.status(200).send({ message: "No has seleccionado ningun archivo" });
        }
    },
    getAll: (req, res) => {
        mongoose_1.Video.find((err, response) => {
            if (!err) {
                res.status(200).json({
                    message: "ok",
                    content: response
                });
            }
            else {
                res.status(500).json({
                    error: "Error al realizar la consulta"
                });
            }
        });
    },
    getImagenByName: (req, res) => {
        let ruta = `imagenes/${req.params.name}`;
        let rutaDefault = `imagenes/default.png`;
        if (fs.existsSync(ruta)) {
            return res.sendFile(path_module.resolve(ruta));
        }
        else {
            return res.sendFile(path_module.resolve(rutaDefault));
        }
    },
    getReporte: (req, res) => {
        jsreport.render({
            template: {
                content: "<h1>Hello world {{this.titulo}}</h1>",
                engine: 'handlebars',
                recipe: 'chrome-pdf'
            },
            data: { titulo: "Titulin" }
        }).then((salida) => {
            salida.stream.pipe(res);
        }).catch((e) => {
            res.end(e.message);
        });
    }
};
