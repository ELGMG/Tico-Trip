import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import {HomeComponent} from './home/home.component'
import { AlajuelaComponent } from './alajuela/alajuela.component';
import { InfoLugar1Component } from './info-lugar1/info-lugar1.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { HerediaComponent } from './heredia/heredia.component';
import { CartagoComponent } from './cartago/cartago.component';
import { LimonComponent } from './limon/limon.component';
import { GuanacasteComponent } from './guanacaste/guanacaste.component';
import { PuntarenasComponent } from './puntarenas/puntarenas.component';
import { RouterModule } from '@angular/router';
import { NotFoundError } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrarseComponent,
    AppComponent,
    AlajuelaComponent,
    InfoLugar1Component,
    SanJoseComponent,
    HerediaComponent,
    CartagoComponent,
    LimonComponent,
    GuanacasteComponent,
    PuntarenasComponent,

 
 
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    RouterModule.forRoot([


      {path:"home",component:HomeComponent},
      {path:"heredia",component:HerediaComponent},


    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
