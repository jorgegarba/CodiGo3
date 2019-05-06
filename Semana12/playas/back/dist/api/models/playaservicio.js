"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playaservicio_model = (sequelize, type) => {
    var playaservicio_model = sequelize.define('t_playaservicio', {
        playaserv_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        playaserv_cost: {
            type: type.DECIMAL(5, 2),
        }
    }, {
        timestamps: false,
        tableName: 't_playaservicio'
    });
    // Aquí se declaran las funciones de Modelo(o de clase)
    return playaservicio_model;
};
