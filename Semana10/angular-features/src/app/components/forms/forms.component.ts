import { Component, OnInit } from '@angular/core';
import {HttpService} from './../../services/http.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: []
})
export class FormsComponent implements OnInit {

  objRestaurant = {
    imagen:'',
    nombre:''
  }

  constructor(private _sHttp:HttpService) { }

  ngOnInit() {

  }

  crearRestaurant(formulario){
    this._sHttp.createRestaurant(this.objRestaurant)
                .subscribe((data)=>{
                  console.log(data);
                },(error)=>{
                  console.log(error);
                })

    formulario.reset();
  }
}