"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("./../config/mongoose");
exports.video_controller = {
    create: (req, res) => {
    },
    getAll: (req, res) => {
        mongoose_1.Video.find((err, response) => {
            if (!err) {
                res.status(200).json({
                    message: "ok",
                    content: response
                });
            }
            else {
                res.status(500).json({
                    error: "Error al realizar la consulta"
                });
            }
        });
    },
};
