
export var servicio_model = (sequelize:any,type:any)=>{
    var servicio_model = sequelize.define('t_servicio',{
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
            type: type.TEXT
        }
    });
    return servicio_model;
}