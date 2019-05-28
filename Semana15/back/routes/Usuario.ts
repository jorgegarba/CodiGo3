// USUARIO ROUTER
import {usuario_controller} from './../controllers/Usuario';
import {Router} from 'express';
export var usuario_router = Router();
usuario_router.get('/usuario',usuario_controller.getAll);
usuario_router.post('/usuario/create',usuario_controller.create);
