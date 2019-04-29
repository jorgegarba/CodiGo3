import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/models/Marcador';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  lat: number = -16.4310132;
  lng: number = -71.5189799;
  
  marcadores: Marcador[] = [];

  constructor() {
    let objMarcador = new Marcador(-16.4310132,-71.5189799);
    this.marcadores.push(objMarcador);
  }

  ngOnInit() {
  }

  agregarMarcador(evento){
    let objMarcador = new Marcador(evento.coords.lat,evento.coords.lng);
    this.marcadores.push(objMarcador);
  }

}
