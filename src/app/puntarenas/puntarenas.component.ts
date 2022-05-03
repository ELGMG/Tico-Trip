import { Component, OnInit } from '@angular/core';
import { DatosService } from '../services/datos.service';
import {Datosmodels } from '../models/datosmodels';
@Component({
  selector: 'app-puntarenas',
  templateUrl: './puntarenas.component.html',
  styleUrls: ['./puntarenas.component.css']

})
export class PuntarenasComponent implements OnInit {

 
  myimage:string = "assets/provincias/puntarenas.png";


  listModels =  Datosmodels;
  constructor(private  _datosService: DatosService){}

  ngOnInit(): void {
  var oo = " ., Contacto:, Descripcion:, Nombre:, Precio:, Ubicacion: "
  let cuadro = document.getElementById("cuadro")
  var categorias =  oo.replace( /,/gi  , "<hr>");
  cuadro!.innerHTML = categorias;
  }



  seleccionarDato1( dato : string){
    this._datosService.seleccionarDato(dato).subscribe(data =>{
    this.listModels = data;
     console.log( this.listModels)
     let resultado = document.getElementById("resultado")
     var   aa = Object.values(this.listModels )
     var bb =  aa.toString().replace( /,/gi  , "<hr>");
    resultado!.innerHTML = bb;
     console.log(bb) 
     console.log(dato)     
    this.imagen(dato)

    })
  }


  imagen(dato : string){
    if (dato == "6270c66d8b056a960d7cf4cd") {
    let x=document.getElementById('cambiar');
    x!.innerHTML = "<img  style='width: 400px;' src='../../assets/lugares/puntarenasjaco.png  '   >";
  
    } else  if (dato == "6270c6758b056a960d7cf4ce") {
      let x=document.getElementById('cambiar');
      x!.innerHTML = "<img  style='width: 350px;  ' src='../../assets/lugares/puntarenasparquenacional.png '  >";
    }

    else  if (dato == "6270c6838b056a960d7cf4cf") {
      let x=document.getElementById('cambiar');
      x!.innerHTML = "<img  style='width: 350px;  ' src='../../assets/lugares/puntarenasmonteverde.png '  >";
    }

    else  if (dato == "626caac83f28320622b67e69") {
      let x=document.getElementById('cambiar');
      x!.innerHTML = "<img  style='width: 350px;  ' src='../../assets/lugares/puntarenasriolajas.png '  >";
    }
  
   }
   
  
 
 



}
