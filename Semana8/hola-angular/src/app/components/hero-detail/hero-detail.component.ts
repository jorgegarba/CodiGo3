import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Hero } from './../../models/hero';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from './../../services/hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styles: []
})
export class HeroDetailComponent {

  @Input() objHeroe:Hero;

  constructor(private _sHero:HeroService,
              private _route:ActivatedRoute,
              private _location:Location) {
    this.getIdAndSetHero();
  }
  /**
   * Función que obtiene el id recibido en la URL
   * y consume el servicio para traer al heroe dado su id
   */
  getIdAndSetHero(){
    let idUrl = this._route.snapshot.paramMap.get('id');
    console.log("ID DE LA URL " + idUrl);
  }
}
