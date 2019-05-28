var mongoose = require('mongoose');
var Schema = mongoose.Schema;
export var usuarioSchema = new Schema({
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

usuarioSchema.methods.nombreApellido = function(){
    return this.usu_nom + " " + this.usu_ape;
};

