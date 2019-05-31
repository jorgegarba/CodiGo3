"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// VIDEO ROUTER
const Video_1 = require("./../controllers/Video");
const express_1 = require("express");
exports.video_router = express_1.Router();
exports.video_router.post('/video', Video_1.video_controller.create);
exports.video_router.get('/video', Video_1.video_controller.getAll);
