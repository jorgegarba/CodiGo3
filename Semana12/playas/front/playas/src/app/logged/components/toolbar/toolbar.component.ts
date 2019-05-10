import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  // 'emisor' es un disparador de eventos
  // su funcion 'emit()' es escuchada por su padre
  @Output() emisor = new EventEmitter<void>();

  constructor() { }
  emitir(){
    this.emisor.emit();
  }
  ngOnInit() {
  }

}
