import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProtegidoService implements CanActivate{

  flag:Boolean = false;

  constructor(private _router:Router) { }

  canActivate():boolean{
    // logica para ver si le damos o no acceso a la ruta solicitada
    if(this.flag){
      return true;
    }else{
      // van a this.culpar
      this._router.navigateByUrl('/');
      return false;
    }
  }
}
