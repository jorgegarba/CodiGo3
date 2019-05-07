"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// PLAYA ROUTER
const playa_1 = require("./../controllers/playa");
const express_1 = require("express");
const utils_1 = require("./../utils/utils");
exports.playa_router = express_1.Router();
var wachiman = (req, res, next) => {
    if (req.headers.authorization) {
        let token = req.headers.authorization.split(' ')[1];
        console.log(token);
        let resultado = utils_1.verificarToken(token);
        console.log(resultado);
    }
    else {
        let response = {
            message: 'unauthorize',
            content: 'No esta autorizado para realizar la solicitud',
        };
        res.status(401).json(response);
    }
};
exports.playa_router.get('/playa/:playa_id/getslots', wachiman, playa_1.playa_controller.getAllSlotsByPlayaId);
