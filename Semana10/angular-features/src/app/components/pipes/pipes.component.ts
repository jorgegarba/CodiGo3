import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: []
})
export class PipesComponent implements OnInit {

  nombre:string = 'Jorge Luis Garnica Blanco';
  miArreglo:Array<number> = [0,1,2,3,4,5,6,7,8,9];
  pi:number = Math.PI;
  igv:number = 0.18;
  sueldo:number = 8000;
  variableAsync = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Jhon');
    }, 2000);
  });
  hoy = new Date();

  constructor() {}

  ngOnInit() {
  }

}
