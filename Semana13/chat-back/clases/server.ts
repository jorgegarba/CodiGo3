import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import {Response,Request, NextFunction} from 'express';
import { Clientes } from './clientes';
import { Cliente } from './cliente';

export default class Server{
    public app:express.Application;
    public puerto:any;
    public httpServer:http.Server;
    public io:socketIO.Server;
    public clientes:Clientes = new Clientes();

    constructor(){
        this.app = express();
        this.app.use((req:Request,res:Response,next:NextFunction)=>{
            res.header('Access-Control-Allow-Origin','http://localhost:4200');
            res.header('Access-Control-Allow-Headers','Content-Type, Authorization');
            res.header('Access-Control-Allow-Methods','GET, POST');
            res.header('Allow','GET, POST');
            next();
        });
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);

        this.puerto = process.env.PORT || 3700;
        this.asignarRutas();
        this.escucharSockets();
    }

    escucharSockets(){
        console.log("Escuchando los sockets");

        this.io.on('connect',(cliente)=>{
            
            let objCliente = new Cliente(cliente.id);
            this.clientes.add(objCliente);
            console.log("nueva lista de conectados");
            console.log(this.clientes.getClientes());    

            cliente.on('disconnect',()=>{
                console.log(`El cliente ${cliente.id} se desconectó`);
                this.clientes.remove(cliente.id);
                this.io.emit('retorno-usuarios',this.clientes.getClientes());
            });

            cliente.on('configurar-usuario',(data)=>{
                let objCliente = new Cliente(cliente.id);
                objCliente.nombre = data;
                this.clientes.update(objCliente);
                console.log("nueva lista de conectados");
                console.log(this.clientes.getClientes());
            });

            cliente.on('lista-usuarios',()=>{
                this.io.emit('retorno-usuarios',this.clientes.getClientes());
            });
        });        
    }

    asignarRutas(){
        this.app.get('/',(req,res)=>{
            res.send("Buenas");
        });
    }

    start(){
        this.httpServer.listen(this.puerto,()=>{
            console.log("Servidor corriendo exitosamente en el puerto "
                        + this.puerto);
        });
    }
}