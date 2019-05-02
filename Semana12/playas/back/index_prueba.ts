import {Request,Response,NextFunction} from 'express';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// configuración de bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


let controladorGeneral = {
    prueba: (req:Request,res:Response)=>{
        let miNombre = req.body.nombre;
        let miImagen = req.body.imagen;
        res.json({
            nombreRecibido:miNombre,
            imagenRecibida:miImagen,
        });
    },
    ejemplo: (req:Request,res:Response)=>{
        res.json({edad:27,
                    talla:1.89});
    },
    getVehiculo: (req:Request,res:Response)=>{
        let id = req.params.vehiculo_id;
        res.json({
            id_recibido:id
        })
    },
    wachiman: (req:Request, res:Response, next:NextFunction)=>{
        let rol = req.body.rol;
        // 1 = administrador
        if(rol==1){
            // pásele joven
            next();
        }else{
            res.json({error:"No estas autorizado "})
        }
    },
    cambiarPassword: (req:Request,res:Response)=>{
        res.json({resultado:"Contrasesadasdasdsssssssssssssssda!!!"})
    }
}
app.post('/prueba',controladorGeneral.prueba);
app.get('/ejemplito',controladorGeneral.ejemplo);
app.get('/traerVehiculo/:vehiculo_id',controladorGeneral.getVehiculo);
app.post('/cambiarPassword',
            controladorGeneral.wachiman,
            controladorGeneral.cambiarPassword);

app.listen(3000,function(){
    console.log("Servidor corriendo correctamente en el puerto 3000");
});