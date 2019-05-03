// pendiente, cambiar tipos any
import {Sequelize} from 'sequelize';

export var servicio_model = (sequelize:Sequelize,type:any)=>{
    var servicio_model = sequelize.define('t_servicio',
    {
        serv_id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
        },
        serv_nom:{
            type: type.STRING(50),
            allowNull:true,
        },
        serv_desc:{
            type: type.TEXT,
            allowNull:true,
        }
    },
    {
        timestamps:false,
        tableName:'t_servicio'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return servicio_model;

}