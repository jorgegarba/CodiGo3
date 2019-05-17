import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  usuariosConectados;

  constructor(private _sWebsocket:WebsocketService) {

  }

  ngOnInit() {
    this.obtenerUsuarios();
  }
  obtenerUsuarios(){
    this._sWebsocket.pedirUsuarios();
    this._sWebsocket.retornoUsuarios().subscribe((data)=>{
      this.usuariosConectados = data;
    });
  }
}
