import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { NovocadastroComponent } from './novocadastro/novocadastro.component';
import { TabelaCardapioComponent } from './tabela-cardapio/tabela-cardapio.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardapioComponent,
    NovocadastroComponent,
    TabelaCardapioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
