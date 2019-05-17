import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nombre = "";

  constructor(private _sWebsocket:WebsocketService,
              private _router:Router) { }

  ngOnInit() {
  }

  login(){
    this._sWebsocket.login(this.nombre);
    this._router.navigateByUrl('/salita');
  }

}
