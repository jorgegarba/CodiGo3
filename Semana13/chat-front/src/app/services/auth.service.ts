import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(private _sRouter:Router) { }

  canActivate(){
    if(localStorage.getItem('nombre')){
      return true;
    }
    this._sRouter.navigateByUrl('');
    return false;
  }
}
