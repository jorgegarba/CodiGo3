import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  objUsuario = {
    usu_email:'',
    usu_pass:''
  }

  constructor(private _sAuth:AuthService) { }

  ngOnInit() {
  }

  login(){
    this._sAuth.login(this.objUsuario).subscribe((respuesta)=>{
      console.log(respuesta);
    })
  }

}
