import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;

  constructor(private _socket:Socket) {
    this.checkStatus();
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

}
