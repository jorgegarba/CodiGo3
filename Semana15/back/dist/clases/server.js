"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Usuario_1 = require("./../routes/Usuario");
const Video_1 = require("./../routes/Video");
const mongoose_1 = __importDefault(require("mongoose"));
class Server {
    // public conexion:any;
    constructor() {
        this.app = express_1.default();
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.header('Access-Control-Allow-Methods', 'GET, POST');
            res.header('Allow', 'GET, POST');
            next();
        });
        this.puerto = process.env.PORT || 3700;
        this.configurarBodyParser();
        this.asignarRutas();
        this.conectarMongo();
    }
    conectarMongo() {
        mongoose_1.default.connect('mongodb://localhost:27017/codigovirtual');
        // this.conexion = mongoose.connection;
    }
    configurarBodyParser() {
        var bodyParser = require('body-parser');
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }
    asignarRutas() {
        this.app.get('/', (req, res) => {
            res.send("Buenas");
        });
        this.app.use('/api', Usuario_1.usuario_router);
        this.app.use('/api', Video_1.video_router);
    }
    start() {
        this.app.listen(this.puerto, () => {
            console.log("Servidor corriendo exitosamente en el puerto "
                + this.puerto);
        });
    }
}
exports.default = Server;
