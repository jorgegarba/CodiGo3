// SERVICIO ROUTER
import {servicio_controller} from './../controllers/servicio';
import {Router} from 'express';
export var servicio_router = Router();
servicio_router.get('/servicio',servicio_controller.getAll);
servicio_router.post('/servicio/crear',servicio_controller.create);
servicio_router.get('/servicio/:serv_id',servicio_controller.getById);
servicio_router.get('/servicio/eliminar/:serv_id',servicio_controller.deleteById);
servicio_router.post('/servicio/actualizar/:serv_id',servicio_controller.update);
