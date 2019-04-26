import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../services/firebase.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: []
})
export class FirebaseComponent implements OnInit {

  constructor(private _sFirebase:FirebaseService) {

  }

  ngOnInit() {
    this._sFirebase.getCanchitas().subscribe(data=>{
      console.log(data[0].latlng._lat);
    }, error => {
      console.log(error);
    });
  }

}
