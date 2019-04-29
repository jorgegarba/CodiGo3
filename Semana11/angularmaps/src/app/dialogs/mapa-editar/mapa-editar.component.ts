import { Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Marcador } from './../../models/Marcador';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {
  // miReferencia => es la variable que representa al Dialog

  constructor(@Inject(MAT_DIALOG_DATA) public data:Marcador,
              public miReferencia: MatDialogRef<MapaEditarComponent>) {
    console.log(data);
  }

  ngOnInit() {
  }

  guardarCambios(){
    this.miReferencia.close("Los nuevos cambios");
  }

  cancelar(){
    this.miReferencia.close();
  }

}
