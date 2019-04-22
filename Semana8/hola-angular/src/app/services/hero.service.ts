import { Injectable } from '@angular/core';
import { Hero } from './../models/hero';
import { HEROES } from './../seeders/seeder-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Array<Hero> {
    return HEROES;
  }
}
