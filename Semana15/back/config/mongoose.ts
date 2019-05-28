import {usuarioSchema} from './../models/Usuario';
import {videoSchema} from './../models/Video';

import mongoose from 'mongoose';
// var mongoose = require('mongoose');

export var Usuario = mongoose.model('usuario', usuarioSchema);
export var Video = mongoose.model('video', videoSchema);