// pendiente, cambiar tipos any
import {Sequelize} from 'sequelize';

export var registro_model = (sequelize:Sequelize,type:any)=>{
    var registro_model = sequelize.define('t_registro',
    {
        reg_id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
        },
        reg_fechin:{
            type: type.DATE,
        },
        reg_fechfin:{
            type: type.DATE,
        },
        reg_est:{
            type: type.STRING(45),
        },
        reg_monto:{
            type: type.DECIMAL(5,2),
        }
    },
    {
        timestamps:false,
        tableName:'t_registro'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return registro_model;

}