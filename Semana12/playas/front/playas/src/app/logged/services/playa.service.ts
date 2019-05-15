import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayaService {

  constructor(private _http:HttpClient) {
    this.getPlayas();
  }

  getPlayas(){
    // CON OBSERVABLES
    return this._http.get('http://localhost:3000/api/playa');
    // CON PROMESAS
    // return fetch('http://localhost:3000/api/playa');    
  }

  pagarConCulqi(json){
    let headers = new HttpHeaders().set("Content-Type","application/json");
    headers.set('Bearer','tkn_test_1E8sNkBc0qv2b4yv');
    this._http.post('https://api.culqi.com/v2/charges',json,{headers:headers}).subscribe(rpta=>{console.log(rpta);
    });
  }
}