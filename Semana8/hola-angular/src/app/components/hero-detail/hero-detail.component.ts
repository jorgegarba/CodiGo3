import { Component } from '@angular/core';

import { Input } from '@angular/core';

import { Hero } from './../../models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styles: []
})
export class HeroDetailComponent {

  @Input() objHeroe:Hero;

  constructor() { }

}
