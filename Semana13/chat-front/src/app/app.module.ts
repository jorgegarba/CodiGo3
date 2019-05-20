import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SalitaComponent } from './components/salita/salita.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { ChatComponent } from './components/chat/chat.component';
const config: SocketIoConfig = { url: 'https://chat-jgarnica-codigo3.herokuapp.com/', options: {} };

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
 
 
let configLogin = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("417359850990-o421qqdj5ce06p79n4ivbptmibtoc2m3.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1018900544985676")
  }
]);
 
export function provideConfig() {
  return configLogin;
}




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    SalitaComponent,
    ListaUsuariosComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }