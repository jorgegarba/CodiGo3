// AUTH ROUTER
import {auth_controller} from './../controllers/auth';
import {Router} from 'express';
export var auth_router = Router();
auth_router.post('/auth/register',auth_controller.register);
