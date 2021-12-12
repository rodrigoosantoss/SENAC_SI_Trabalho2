import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './cardapio/cardapio.component';
import { HomeComponent } from './home/home.component';
import { NovocadastroComponent } from './novocadastro/novocadastro.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'novocadastro', component: NovocadastroComponent },
  { path: 'editar/:id', component: NovocadastroComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
