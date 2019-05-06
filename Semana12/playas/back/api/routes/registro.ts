// REGISTRO ROUTER //
import {registro_controller} from './../controllers/registro';
import {Router} from 'express';
export var registro_router = Router();
registro_router.get('/registro/slot/:slotp_id/getall',
                    registro_controller.getAllRegistrosBySlotId);
registro_router.get('/registro/slot/:slotp_id/fecha/:dia',
                    registro_controller.getAllRegByDateBySlotId);
