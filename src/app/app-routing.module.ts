import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerediaComponent } from './heredia/heredia.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
 
{path:'Login', component:LoginComponent},
{path:'Registrarse', component:RegistrarseComponent},

{path:'Heredia', component:HerediaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
