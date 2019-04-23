import {Component} from '@angular/core';
import {Hero} from './../../models/hero';
import { HeroService } from './../../services/hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent{
    public arrHeroes:Array<Hero>;
    public selectedHero:Hero;

    constructor(private _sHero:HeroService) {
        this._sHero.getHeroes().then((respuesta)=>{
            this.arrHeroes = respuesta;
        });
    }
    
    public onSelect(selectedHero):void{
        this.selectedHero = selectedHero;
    }

}
