// PLAYA ROUTER
import {playa_controller} from './../controllers/playa';
import {Router} from 'express';
export var playa_router = Router();
playa_router.get('/playa/:playa_id/getslots',playa_controller.getAllSlotsByPlayaId);
