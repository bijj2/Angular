import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './views/contato/contato.component';
import { JogadorComponent } from './views/jogador/jogador.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    JogadorComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
