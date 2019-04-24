import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from './../../services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styles: []
})
export class HttpComponent implements OnInit, OnDestroy {

  observador:Subscription;
  restaurants:Array<any>;

  constructor(private _sHttp:HttpService) {
    console.log("--- Constructor ---"); 
  }

  ngOnInit() {
    console.log("--- ngOnInit ---"); 
    // Obteniendo data externa
    // a través de {fetch}

    // this._sHttp.getRestaurants()
    // .then(respuesta=>{
    //   return respuesta.json();
    // }).then(data=>{
    //   console.log(data);
    // })
    this.observador = this._sHttp.getRestaurants().subscribe( data => {
      this.restaurants = data;
    });
  }

  ngOnDestroy(){
    console.log("--- ngOnDestroy ---");
    this.observador.unsubscribe();
  }
}
