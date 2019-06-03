"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("./../config/mongoose");
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
};
