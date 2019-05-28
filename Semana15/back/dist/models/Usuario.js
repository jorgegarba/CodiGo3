"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
exports.usuarioSchema = new Schema({
    usu_nom: String,
    usu_ape: String,
    usu_hash: String,
    usu_salt: String,
    usu_fonos: [
        {
            numero: String,
            operador: String
        }
    ],
});
exports.usuarioSchema.methods.nombreApellido = function () {
    return this.usu_nom + " " + this.usu_ape;
};
