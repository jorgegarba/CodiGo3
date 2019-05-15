import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  // 'emisor' es un disparador de eventos
  // su funcion 'emit()' es escuchada por su padre
  @Output() emisor = new EventEmitter<void>();

  usuario;

  constructor(private _sAuth:AuthService) { }
  emitir(){
    this.emisor.emit();
  }
  ngOnInit() {
    this.usuario = JSON.parse(this._sAuth.getUserDetails()).usu_nom;
  }
  cerrarSesion(){
    this._sAuth.logout();
  }

}
