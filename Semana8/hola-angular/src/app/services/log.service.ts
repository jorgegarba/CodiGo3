import { Injectable } from '@angular/core';
interface iLogs {
  /**
   * Función que recibe un log y lo agrega al arreglo de logs
   * @param log Log que recibe la función
   */
  addLog(log:String):void;
  /**
   * Funcion que limpia o borra todos los logs del arreglo de logs
   */
  clear():void;
}

@Injectable({
  providedIn: 'root'
})
export class LogService implements iLogs{
  
  logs:Array<String> = [];

  constructor() { }

  addLog(log:String): void {
    this.logs.push(log);
  }

  clear():void{
    this.logs = [];
  }
}
