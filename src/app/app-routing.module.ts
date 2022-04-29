import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuanacasteComponent } from './guanacaste/guanacaste.component';
import { HeaderComponent } from './header/header.component';
import { HerediaComponent } from './heredia/heredia.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { Header2Component } from './header2/header2.component';
import { AlajuelaComponent } from './alajuela/alajuela.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { CartagoComponent } from './cartago/cartago.component';
import { PuntarenasComponent } from './puntarenas/puntarenas.component';
import { LimonComponent } from './limon/limon.component';

const routes: Routes = [
 
{path:'Login', component:LoginComponent},
{path:'Registrarse', component:RegistrarseComponent},
{path:'HomeLink', component:HomeComponent},
{path:'Heredia', component:HerediaComponent},
{path:'Header', component:HeaderComponent},
{path:'Guana', component:GuanacasteComponent},
{path:'Header2', component:Header2Component},
{path:'Alajuela', component:AlajuelaComponent},
{path:'SanJose', component:SanJoseComponent},
{path:'Cartago', component:CartagoComponent},
{path:'Puntarenas', component:PuntarenasComponent},
{path:'Limon', component:LimonComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
