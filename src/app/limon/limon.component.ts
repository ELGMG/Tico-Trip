import { Component, OnInit } from '@angular/core';
import { DatosService } from '../services/datos.service';
import {Datosmodels } from '../models/datosmodels';
@Component({
  selector: 'app-limon',
  templateUrl: './limon.component.html',
  styleUrls: ['./limon.component.css']
})
export class LimonComponent implements OnInit {

  myimage:string = "assets/provincias/limon.png";

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
   

 
 


getClimaData(){

  
  let data = JSON.parse('{"coord":{"lon":-84.0907,"lat":9.9281},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":299.19,"feels_like":299.19,"temp_min":298.58,"temp_max":301.82,"pressure":1019,"humidity":47},"visibility":10000,"wind":{"speed":4.63,"deg":240},"clouds":{"all":20},"dt":1650474824,"sys":{"type":2,"id":2007848,"country":"CR","sunrise":1650453803,"sunset":1650498403},"timezone":-21600,"id":3621849,"name":"San José","cod":200}')
  this.setClimaData(data);
}

setClimaData(data: any){

  this.ClimaData = data;
  let sunsetTime = new Date(this.ClimaData.sys.sunset * 1000);
  this.ClimaData.sunset_time = sunsetTime.toLocaleTimeString();
  let currentDate = new Date();
  this.ClimaData.isDay = (currentDate.getTime() < sunsetTime.getTime());
  this.ClimaData.temp_celcius = (this.ClimaData.main.temp - 273.15).toFixed(0);
  this.ClimaData.temp_min = (this.ClimaData.main.temp_min - 273.15).toFixed(0);
  this.ClimaData.temp_max = (this.ClimaData.main.temp_max - 273.15).toFixed(0);
  this.ClimaData.temp_feels_like = (this.ClimaData.main.feels_like - 273.15).toFixed(0);

}



}
