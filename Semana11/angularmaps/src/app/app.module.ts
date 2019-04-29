import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Importando Modulo Material
import {MaterialModule} from './material.module';
// Angular Google Maps
import { AgmCoreModule } from '@agm/core';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './dialogs/mapa-editar/mapa-editar.component';

@NgModule({
  entryComponents:[
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBcjhtE0FIFEO92Z_7xKQWODx3I_QXq33E'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
