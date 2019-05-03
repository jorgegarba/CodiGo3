"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../config/sequelize");
exports.servicio_controller = {
    getAll: (req, res) => {
        sequelize_1.Servicio.findAll().then((servicios) => {
            let response = {
                message: "ok",
                content: servicios
            };
            res.status(404).json(response);
        }).catch((error) => {
            console.log("error");
        });
    },
    create: (req, res) => {
        sequelize_1.Servicio.create(req.body).then((servicioCreado) => {
            if (servicioCreado) {
                let response = {
                    message: 'created',
                    content: servicioCreado
                };
                res.status(201).json(response);
            }
            else {
                let response = {
                    message: 'error',
                    content: null
                };
                res.status(500).json(response);
            }
        });
    },
    getById: (req, res) => {
        let { serv_id } = req.params;
        sequelize_1.Servicio.findByPk(serv_id).then((servicio) => {
            if (servicio) {
                let response = {
                    message: 'found',
                    content: servicio
                };
                res.status(200).json(response);
            }
            else {
                let response = {
                    message: 'not found',
                    content: null
                };
                res.status(200).json(response);
            }
        });
    },
    deleteById: (req, res) => {
        sequelize_1.Servicio.destroy({
            where: {
                serv_id: req.params.serv_id
            }
        }).then((cantidad) => {
            if (cantidad > 0) {
                let response = {
                    message: "eliminado",
                    content: cantidad,
                };
                res.status(200).json(response);
            }
            else {
                let response = {
                    message: "No se ha eliminado ningun registro",
                    content: cantidad,
                };
                res.status(200).json(response);
            }
        });
    },
    update: (req, res) => {
        sequelize_1.Servicio.update(req.body, {
            where: {
                serv_id: req.params.serv_id
            }
        }).then((cantidad) => {
            if (cantidad > 0) {
                let response = {
                    message: 'Se modificaron los archivos',
                    content: cantidad
                };
                res.status(200).json(response);
            }
            else {
                let response = {
                    message: 'No se modificaron los archivos',
                    content: cantidad
                };
                res.status(200).json(response);
            }
        });
    }
};
