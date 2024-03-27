import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "cadastro", component:CadastroComponent },
  {path:"inicio", component:InicioComponent},
  {path:"", component:InicioComponent},
  {path: "home", component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
