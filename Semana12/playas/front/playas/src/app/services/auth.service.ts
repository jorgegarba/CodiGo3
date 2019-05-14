import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token:string;

  constructor(private _http:HttpClient) {
    this.getToken();
  }

  isLogged(){
    let userDetails = this.getUserDetails();
    if(userDetails){
      let ahora = Date.now() / 1000;
      if(JSON.parse(userDetails).exp > ahora){
        return true;
      }
    }
    localStorage.removeItem('token');
    return false;
  }

  getToken(){
    if(!this.token){
      this.token = localStorage.getItem("token");
    }
  }

  login(objUsuario):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post('http://localhost:3000/api/auth/login',
                                    objUsuario,{headers:headers});
  }

  saveToken(token){
    localStorage.setItem('token',token);
    this.token = token;
    this.getUserDetails();
  }
  getUserDetails(){
    if(this.token){
      let centro = this.token.split('.')[1];
      return window.atob(centro);
    }
    return null;
  }
}
