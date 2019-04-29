import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Toolbar Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
// Boton Angular Material
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],exports: [
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
