// PLAYA ROUTER
import {playa_controller} from './../controllers/playa';
import {Router} from 'express';
import {wachiman} from './../utils/utils';
export var playa_router = Router();

playa_router.get('/playa/:playa_id/getslots',wachiman,playa_controller.getAllSlotsByPlayaId);
playa_router.get('/playa',playa_controller.getAllPlayas);