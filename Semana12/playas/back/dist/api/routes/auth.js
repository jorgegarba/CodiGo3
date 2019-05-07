"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// AUTH ROUTER
const auth_1 = require("./../controllers/auth");
const express_1 = require("express");
exports.auth_router = express_1.Router();
exports.auth_router.post('/auth/register', auth_1.auth_controller.register);
