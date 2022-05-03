import { Component, OnInit } from '@angular/core';
import { DatosService } from '../services/datos.service';
import {Datosmodels } from '../models/datosmodels';
@Component({
  selector: 'app-cartago',
  templateUrl: './cartago.component.html',
  styleUrls: ['./cartago.component.css']
})
export class CartagoComponent implements OnInit {

  myimage:string = "assets/provincias/cartago.png";


  ClimaData:any;
 
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
    if (dato == "6270c8328b056a960d7cf4e1") {
    let x=document.getElementById('cambiar');
    x!.innerHTML = "<img  style='width: 400px;' src='../../assets/images/gua.jpg'   >";
  
    } else  if (dato == "6270c83a8b056a960d7cf4e2") {
      let x=document.getElementById('cambiar');
      x!.innerHTML = "<img  style='width: 350px;  ' src='../../assets/images/fondoHeredia.jpg '  >";
    }
 else  if (dato == "6270c8408b056a960d7cf4e3") {
    let x=document.getElementById('cambiar');
    x!.innerHTML = "<img  style='width: 350px;  ' src='../../assets/images/fondoHeredia.jpg '  >";
  }
  

  else  if (dato == "6270c8478b056a960d7cf4e4") {
    let x=document.getElementById('cambiar');
    x!.innerHTML = "<img  style='width: 350px;  ' src='../../assets/images/fondoHeredia.jpg '  >";
  }

   }
   
  

 

}
