"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playa_model = (sequelize, type) => {
    var playa_model = sequelize.define('t_playa', {
        playa_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        playa_nom: {
            type: type.STRING(45),
            allowNull: false
        },
        playa_lat: {
            type: type.DECIMAL(10, 7),
            allowNull: false
        },
        playa_lng: {
            type: type.DECIMAL(10, 7),
            allowNull: false
        },
        playa_dir: {
            type: type.TEXT,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 't_playa'
    });
    // Aquí se declaran las funciones de Modelo(o de clase)
    return playa_model;
};
