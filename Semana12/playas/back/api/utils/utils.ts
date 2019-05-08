const jwt = require('jsonwebtoken');
import {Request, Response, NextFunction} from 'express';

export const verificarToken = (token: any) => { 
    try {
        let data = jwt.verify(token, 'sape', { algorithm: 'RS256' });
        return data;
    } catch (err) {
        console.log(err.message);
        return null;
    }
}   

export var wachiman = (req:Request,res:Response,next:NextFunction)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization.split(' ')[1];
        let resultado = verificarToken(token);
        if(resultado){
            next();
        }else{
            let response = {
                message:'error',
                content:'Error en el token',
            };
            res.status(500).json(response);
        }
    }else{
        let response = {
            message:'unauthorize',
            content:'No esta autorizado para realizar la solicitud',
        };
        res.status(401).json(response);
    }
}