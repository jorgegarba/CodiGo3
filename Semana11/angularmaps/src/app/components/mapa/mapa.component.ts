import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/models/Marcador';
import {MatSnackBar, MatDialogRef} from '@angular/material';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {MapaEditarComponent} from './../../dialogs/mapa-editar/mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  // creando una referencia al dialog
  dialogReferencia:MatDialogRef<any>;

  lat: number = -16.4310132;
  lng: number = -71.5189799;
  
  marcadores: Marcador[] = [];

  constructor(private snackBar: MatSnackBar,
              public dialog: MatDialog) {
    let objMarcador = new Marcador(-16.4310132,-71.5189799);
    this.marcadores.push(objMarcador);
  }

  ngOnInit() {
  }

  agregarMarcador(evento){
    let objMarcador = new Marcador(evento.coords.lat,evento.coords.lng);
    this.marcadores.push(objMarcador);
  }

  eliminarMarcador(posicion){
    this.marcadores.splice(posicion,1);
    this.snackBar.open("Marcador eliminado!", "Cerrar", {
      duration: 2000,
    });
  }

  abrirDialog(marcador:Marcador){
    this.dialogReferencia = this.dialog.open(MapaEditarComponent, {
      data: {
        marcador: marcador
      }
    });

    this.dialogReferencia.afterClosed().subscribe(data => {
      console.log(data);
    });
  }

}
