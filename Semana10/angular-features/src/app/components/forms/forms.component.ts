import { Component, OnInit } from '@angular/core';
import {HttpService} from './../../services/http.service';

import { ToastrService } from 'ngx-toastr';

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
  creado:Boolean;

  constructor(private _sHttp:HttpService,
              private _sToastr: ToastrService) { }

  ngOnInit() {

  }

  crearRestaurant(formulario){
    this._sHttp.createRestaurant(this.objRestaurant)
                .subscribe((data)=>{
                              this._sToastr.success('Creado!', 'Restaurant creado exitosamente!!');
                            },(error)=>{
                              this.creado = false;
                            });

    formulario.reset();
  }
}