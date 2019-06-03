// VIDEO ROUTER
import {video_controller} from './../controllers/Video';
import {Router} from 'express';

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir:'./imagenes'});

export var video_router = Router();
video_router.post('/video',video_controller.create);
video_router.get('/video',video_controller.getAll);
video_router.post('/video/upload/:id', multipartMiddleware,video_controller.uploadImage);