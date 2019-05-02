// SERVICIO ROUTER
import {servicio_controller} from './../controllers/servicio';
import {Router} from 'express';
export var servicio_router = Router();
servicio_router.get('/servicio',servicio_controller.home);