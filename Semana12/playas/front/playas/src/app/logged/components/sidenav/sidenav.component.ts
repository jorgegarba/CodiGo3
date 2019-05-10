import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher:MediaQueryList = matchMedia('(max-width:720px)');

  constructor() { }

  ngOnInit() {
  }

  pantallaSmall(){
    // matches retorna true, cuando la pantalla es menor igual a 720;
    return this.mediaMatcher.matches;
  }

}
