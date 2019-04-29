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
  objMarcador:Marcador;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              public miReferencia: MatDialogRef<MapaEditarComponent>) {                
      this.objMarcador = data.marcador;
  }

  ngOnInit() {
  }

  guardarCambios(titulo, descripcion){
    let objRespuesta = {
      titulo,
      descripcion
    };
    
    this.miReferencia.close(objRespuesta);
  }

  cancelar(){
    this.miReferencia.close();
  }

}
