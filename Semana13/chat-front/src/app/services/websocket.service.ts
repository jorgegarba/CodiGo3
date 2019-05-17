import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;

  constructor(public _socket:Socket,
              private _router:Router) {
    this.checkStatus();
    this.cargarStorage();
  }

  cargarStorage(){
    if(localStorage.getItem('nombre')){
      this._socket.emit('configurar-usuario',localStorage.getItem('nombre'));
    }
  }

  checkStatus(){
    this._socket.on('connect',()=>{
      console.log("Conectado al servidor de sockets");
      this.socketStatus = true;
    });
    this._socket.on('disconnect',()=>{
      console.log("Desconectado al servidor de sockets");
      this.socketStatus = false;
    });
  }

  logout(){
    localStorage.removeItem('nombre');
    this._socket.emit('configurar-usuario','sin-nombre');
    this._router.navigateByUrl('');
  }

  login(nombre:String){
    this.guardarStorage(nombre);
    this._socket.emit('configurar-usuario',nombre);
  }
  guardarStorage(nombre){
    localStorage.setItem('nombre',nombre);
  }
  pedirUsuarios(){
    this._socket.emit('lista-usuarios');
  }
  retornoUsuarios(){
    return this._socket.fromEvent('retorno-usuarios'); 
  }
  nuevoMensaje(){
    return this._socket.fromEvent('nuevo-mensaje');
  }

  emitirMensaje(mensaje:string){
    this._socket.emit('enviar-mensaje',mensaje);
  }
}
