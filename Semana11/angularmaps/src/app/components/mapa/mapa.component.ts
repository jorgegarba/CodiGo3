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
    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  ngOnInit() {
  }

  agregarMarcador(evento){
    let objMarcador = new Marcador(evento.coords.lat,evento.coords.lng);
    this.marcadores.push(objMarcador);
    localStorage.setItem("marcadores",JSON.stringify(this.marcadores));
    this.snackBar.open("Marcador creado!", "Cerrar", {
      duration: 2000,
    });

  }

  eliminarMarcador(posicion){
    this.marcadores.splice(posicion,1);
    this.snackBar.open("Marcador eliminado!", "Cerrar", {
      duration: 2000,
    });
    localStorage.setItem("marcadores",JSON.stringify(this.marcadores));
  }

  abrirDialog(marcador:Marcador){
    this.dialogReferencia = this.dialog.open(MapaEditarComponent, {
      data:{
        marcador:marcador
      },
    });

    this.dialogReferencia.afterClosed().subscribe(data => {
      if(data){
        marcador.titulo = data.titulo;
        marcador.descripcion = data.descripcion;
        localStorage.setItem("marcadores",JSON.stringify(this.marcadores));
        this.snackBar.open("Marcador editado!", "Cerrar", {
          duration: 2000,
        });
      }
    });
  }

}
