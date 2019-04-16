import {Component} from '@angular/core';
import {HEROES} from './../../seeders/seeder-heroes';
import {Hero} from './../../models/hero';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent{
    
    public arrHeroes:Array<Hero> = HEROES;
    
    public selectedHero:Hero;
    
    public onSelect(selectedHero):void{
        this.selectedHero = selectedHero;
    }

}
