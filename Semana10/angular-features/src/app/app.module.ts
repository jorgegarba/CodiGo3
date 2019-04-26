import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { HttpComponent } from './components/http/http.component';
import { FormsComponent } from './components/forms/forms.component';

// libreria Toastr (alertas)
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesComponent } from './components/pipes/pipes.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

// Librería AngularFire
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireDatabaseModule} from '@angular/fire/database';

// Environments
import { environment } from './../environments/environment';
import { FirebaseComponent } from './components/firebase/firebase.component';


import { DataTablesModule } from 'angular-datatables';



import { DatatablesComponent } from './components/datatables/datatables.component';
import { CustomDatatablesComponent } from './components/custom-datatables/custom-datatables.component';
import { ProtegidoComponent } from './components/protegido/protegido.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ErrorComponent,
    HttpComponent,
    FormsComponent,
    PipesComponent,
    CapitalizePipe,
    FirebaseComponent,
    DatatablesComponent,
    CustomDatatablesComponent,
    ProtegidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 15000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // ToastrModule added,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
