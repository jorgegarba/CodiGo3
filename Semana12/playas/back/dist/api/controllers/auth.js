"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../config/sequelize");
exports.auth_controller = {
    /**
     * Función para registrar un usuario
     * se reciben los parametros por el BODY método POST
     */
    register: (req, res) => {
        sequelize_1.Usuario.findAll({
            where: {
                usu_email: req.body.usu_email
            }
        }).then((usuarios) => {
            if (usuarios.length === 0) {
                // Instanciando un objeto del modelo Usuario
                let objUsuario = sequelize_1.Usuario.build(req.body);
                objUsuario.setSaltAndHash(req.body.usu_pass);
                objUsuario.save().then((usuarioCreado) => {
                    let token = usuarioCreado.generateJWT();
                    if (usuarioCreado && token) {
                        let response = {
                            message: 'created',
                            token: token,
                        };
                        res.status(201).json(response);
                    }
                    else {
                        let response = {
                            message: 'error',
                            content: 'Erro al crear el usuario y/o token',
                        };
                        res.status(500).json(response);
                    }
                });
            }
            else {
                let response = {
                    message: 'error',
                    content: `El usuario con email ${req.body.usu_email} ya existe`,
                };
                res.status(500).json(response);
            }
        });
    },
    login: (req, res) => {
    }
};
