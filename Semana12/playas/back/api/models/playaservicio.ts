// pendiente, cambiar tipos any
import {Sequelize} from 'sequelize';

export var playaservicio_model = (sequelize:Sequelize,type:any)=>{
    var playaservicio_model = sequelize.define('t_playaservicio',
    {
        playaserv_id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
        },
        playaserv_cost:{
            type:type.DECIMAL(5,2),
        }
    },
    {
        timestamps:false,
        tableName:'t_playaservicio'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return playaservicio_model;

}