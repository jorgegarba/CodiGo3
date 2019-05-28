import {usuarioSchema} from './../models/Usuario';

import mongoose from 'mongoose';
// var mongoose = require('mongoose');

export var Usuario = mongoose.model('usuario', usuarioSchema);