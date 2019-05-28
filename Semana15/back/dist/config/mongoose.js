"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = require("./../models/Usuario");
const mongoose_1 = __importDefault(require("mongoose"));
// var mongoose = require('mongoose');
exports.Usuario = mongoose_1.default.model('usuario', Usuario_1.usuarioSchema);
