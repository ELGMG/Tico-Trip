import { Component, OnInit } from '@angular/core';
import { DatosService } from '../services/datos.service';
import {Datosmodels } from '../models/datosmodels';
@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {

 
myimage:string = "assets/provincias/sanjose.png";

  ClimaData:any;
  listModels =  Datosmodels;
  constructor(private  _datosService: DatosService){}


  ngOnInit(): void {
 
    var oo = " ., Contacto:, Descripcion:, Nombre:, Precio:, Ubicacion: "
    let cuadro = document.getElementById("cuadro")
    var categorias =  oo.replace( /,/gi  , "<hr>");
    cuadro!.innerHTML = categorias;
  
  }
 

  getDatos(){
   this._datosService.getDatos().subscribe( data => {
    console.log(data);
    this.listModels = data;

   }) 
  }
 
  seleccionarDato1( dato : string){
    this._datosService.seleccionarDato(dato).subscribe(data =>{
    this.listModels = data;
     console.log( this.listModels)
     let resultado = document.getElementById("resultado")
     var   aa = Object.values(this.listModels )
     var bb =  aa.toString().replace( /,/gi  , "<hr >");
    resultado!.innerHTML = bb;
     console.log(bb) 
     console.log(dato)     
    this.imagen(dato)

    })
  }
 
 imagen(dato : string){
  if (dato == "6270c7188b056a960d7cf4d5") {
  let x=document.getElementById('cambiar');
  x!.innerHTML = "<img  style='width: 400px;' src='../../assets/lugares/sanjoseBebedero.png'   >";

  } else  if (dato == "6270c71e8b056a960d7cf4d6") {
    let x=document.getElementById('cambiar');
    x!.innerHTML = "<img  style='width: 350px;  ' src='../../assets/lugares/sanjoseLacangreja.png '  >";
  }
  else  if (dato == "6270c7258b056a960d7cf4d7") {
    let x=document.getElementById('cambiar');
    x!.innerHTML = "<img  style='width: 350px;  ' src='../../assets/lugares/sanjoseMuseodeoro.png '  >";
  }

    let x=document.getElementById('cambiar');
    x!.innerHTML = "<img  style='width: 350px;  ' src='../../assets/lugares/sanjoseTeatronacional.png '  >";
  }

 }
 




