"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("./../config/mongoose");
exports.usuario_controller = {
    getAll: (req, res) => {
        mongoose_1.Usuario.find((error, response) => {
            if (error) {
                res.status(500).json({
                    error: "Error en el servidor"
                });
            }
            else {
                res.status(200).json({
                    content: response,
                    message: "ok"
                });
            }
        });
    },
    create: (req, res) => {
        let objUsuario = new mongoose_1.Usuario(req.body);
        objUsuario.save(function (error, usuarioCreado) {
            if (error) {
                res.status(500).json({
                    error: "error al crear el usuario",
                });
            }
            else {
                res.status(201).json({
                    message: "created",
                    content: usuarioCreado
                });
            }
        });
    },
    updateById: (req, res) => {
        mongoose_1.Usuario.findByIdAndUpdate(req.body._id, req.body, { new: true }, (error, actualizado) => {
            if (!error) {
                res.status(200).json({
                    message: "updated",
                    content: actualizado
                });
            }
            else {
                res.status(500).json({
                    error: "Hubo un error en la actualización"
                });
            }
        });
    },
};
