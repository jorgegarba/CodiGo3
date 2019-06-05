"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// VIDEO ROUTER
const Video_1 = require("./../controllers/Video");
const express_1 = require("express");
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './imagenes' });
exports.video_router = express_1.Router();
exports.video_router.post('/video', Video_1.video_controller.create);
exports.video_router.get('/video', Video_1.video_controller.getAll);
// borrar video
exports.video_router.delete('/video/:id', Video_1.video_controller.deleteById);
exports.video_router.post('/video/upload/:id', multipartMiddleware, Video_1.video_controller.uploadImage);
exports.video_router.get('/getImagenByName/:name', Video_1.video_controller.getImagenByName);
