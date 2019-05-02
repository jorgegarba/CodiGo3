"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// SERVICIO ROUTER
const servicio_1 = require("./../controllers/servicio");
const express_1 = require("express");
exports.servicio_router = express_1.Router();
exports.servicio_router.get('/servicio', servicio_1.servicio_controller.home);
