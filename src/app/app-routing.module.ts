import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuanacasteComponent } from './guanacaste/guanacaste.component';
import { HeaderComponent } from './header/header.component';
import { HerediaComponent } from './heredia/heredia.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
 
{path:'Login', component:LoginComponent},
{path:'Registrarse', component:RegistrarseComponent},
{path:'HomeLink', component:HomeComponent},

{path:'Heredia', component:HerediaComponent},
{path:'Header', component:HeaderComponent},
{path:'Guana', component:GuanacasteComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
