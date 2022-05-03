import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';

=======
import { HttpClientModule } from '@angular/common/http'
>>>>>>> d4afbbff0e5055f82fd41b6c34e569105622bce4

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
    HeaderComponent,
    Header2Component,

 
 
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
<<<<<<< HEAD
    RouterModule.forRoot([]),

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

=======
    HttpClientModule,
    RouterModule.forRoot([])
>>>>>>> d4afbbff0e5055f82fd41b6c34e569105622bce4


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
