import { Injectable } from '@angular/core';
import { HEROES } from './../seeders/seeder-heroes';
import { LogService } from './log.service';
import { Hero } from './../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private _sLog:LogService) { }
  
  getHeroes(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._sLog.addLog("Se han obtenido los heroes" + new Date());
        resolve(HEROES);
      }, 2000);
    });
  }

  getHeroById(id:number):Promise<any>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._sLog.addLog(`Se ha solicitado el heroe de id ${id} ${new Date()}`);
        let heroeTmp = HEROES.filter( hero => hero.id === id );
        resolve(heroeTmp[0]);
      }, 1500);
    });
  }

}
