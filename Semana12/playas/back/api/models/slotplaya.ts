// pendiente, cambiar tipos any
import {Sequelize} from 'sequelize';

export var slotplaya_model = (sequelize:Sequelize,type:any)=>{
    var slotplaya_model = sequelize.define('t_slotplaya',
    {
        slotp_id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
        },
        slotp_nro:{
            type: type.INTEGER,
        },
        slotp_est:{
            type: type.STRING(1),
        },
    },
    {
        timestamps:false,
        tableName:'t_slotplaya'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return slotplaya_model;

}