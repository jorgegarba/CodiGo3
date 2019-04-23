import { Component, OnInit } from '@angular/core';
import {Hero} from './../../models/hero';
import {HeroService} from './../../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes:Array<Hero> = [];

  constructor(private _sHero:HeroService) {
    this._sHero.getHeroes().then((respuesta)=>{
      this.heroes = respuesta.slice(0,4);
    });
  }

  ngOnInit() {
  }

}
