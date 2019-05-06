"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// PLAYA ROUTER
const playa_1 = require("./../controllers/playa");
const express_1 = require("express");
exports.playa_router = express_1.Router();
exports.playa_router.get('/playa/:playa_id/getslots', playa_1.playa_controller.getAllSlotsByPlayaId);
