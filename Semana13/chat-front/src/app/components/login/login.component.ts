import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Router } from '@angular/router';
// LOGIN
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  nombre = "";
  constructor(private _sWebsocket:WebsocketService,
              private _router:Router,
              private authService: AuthService) {
              }

  ngOnInit() {
    this.authService.authState.subscribe((user:SocialUser) => {
      if(user){
        console.log(user);
        this._sWebsocket.login(user.name);
        this._router.navigateByUrl('/salita');
      }
    });
  }

  login(){
    this._sWebsocket.login(this.nombre);
    this._router.navigateByUrl('/salita');
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

}
