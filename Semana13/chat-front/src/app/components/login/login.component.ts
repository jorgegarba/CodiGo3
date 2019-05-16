import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nombre = "";

  constructor(private _sWebsocket:WebsocketService) { }

  ngOnInit() {
  }

  login(){
    console.log(this.nombre);
  }

}
