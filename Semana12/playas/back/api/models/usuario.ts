// pendiente, cambiar tipos any
import {Sequelize} from 'sequelize';

export var usuario_model = (sequelize:Sequelize,type:any)=>{
    var usuario_model = sequelize.define('t_usuario',
    {
        usu_id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
        },
        usu_email:{
            type: type.STRING(50),
        },
        usu_hash:{
            type: type.TEXT,
        },
        usu_salt:{
            type: type.TEXT,
        },
        usu_rol:{
            type: type.STRING(1),
        },
        usu_nom:{
            type: type.STRING(100),
        },
        usu_ape:{
            type: type.STRING(100),
        },
        usu_tel:{
            type: type.STRING(50)
        }
    },
    {
        timestamps:false,
        tableName:'t_usuario'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return usuario_model;

}