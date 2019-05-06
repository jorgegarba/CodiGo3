"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// REGISTRO ROUTER //
const registro_1 = require("./../controllers/registro");
const express_1 = require("express");
exports.registro_router = express_1.Router();
exports.registro_router.get('/registro/slot/:slotp_id/getall', registro_1.registro_controller.getAllRegistrosBySlotId);
exports.registro_router.get('/registro/slot/:slotp_id/fecha/:dia', registro_1.registro_controller.getAllRegByDateBySlotId);
