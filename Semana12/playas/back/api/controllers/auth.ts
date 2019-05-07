// AUTH CONTROLLER
import { Request, Response } from 'express';
import { Usuario } from './../config/sequelize';
export var auth_controller = {
    /**
     * Función para registrar un usuario
     * se reciben los parametros por el BODY método POST
     */
    register: (req: Request, res: Response) => {

        Usuario.findAll({
            where: {
                usu_email: req.body.usu_email
            }
        }).then((usuarios: any) => {
            if (usuarios.length === 0) {
                // Instanciando un objeto del modelo Usuario
                let objUsuario = Usuario.build(req.body);
                objUsuario.setSaltAndHash(req.body.usu_pass);
                objUsuario.save().then((usuarioCreado: any) => {
                    let token = usuarioCreado.generateJWT();
                    if (usuarioCreado && token) {
                        let response = {
                            message: 'created',
                            token: token,
                        };
                        res.status(201).json(response);
                    } else {
                        let response = {
                            message: 'error',
                            content: 'Erro al crear el usuario y/o token',
                        };
                        res.status(500).json(response);
                    }
                });
            }else{
                let response = {
                    message: 'error',
                    content: `El usuario con email ${req.body.usu_email} ya existe`,
                };
                res.status(500).json(response);
            }
        })


    },
    login: (req: Request, res: Response) => {

    }
}