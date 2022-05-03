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
    if (dato == "62706c1464d996a5e9178a9c") {
    let x=document.getElementById('cambiar');
    x!.innerHTML = "<img src='../../assets/images/limon.png'   >";
  
    } else  if (dato == "626caac83f28320622b67e69") {
      let x=document.getElementById('cambiar');
      x!.innerHTML = "<img src='../../assets/images/heredia.png '  >";
    }
  
   }
   

 

}
