// PLAYA ROUTER
import {playa_controller} from './../controllers/playa';
import {Router,Request,Response,NextFunction} from 'express';
import {verificarToken} from './../utils/utils';
export var playa_router = Router();

var wachiman = (req:Request,res:Response,next:NextFunction)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization.split(' ')[1];

        console.log(token);
        let resultado = verificarToken(token);
        console.log(resultado);
        
    }else{
        let response = {
            message:'unauthorize',
            content:'No esta autorizado para realizar la solicitud',
        };
        res.status(401).json(response);
    }
}

playa_router.get('/playa/:playa_id/getslots',wachiman,playa_controller.getAllSlotsByPlayaId);
