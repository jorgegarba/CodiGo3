import { Component, OnInit } from '@angular/core';
import { PlayaService } from '../../services/playa.service';

@Component({
  selector: 'app-playas',
  templateUrl: './playas.component.html',
  styleUrls: ['./playas.component.css']
})
export class PlayasComponent implements OnInit {

  constructor(private _sPlaya:PlayaService) { }

  ngOnInit() {
  }
  
}
