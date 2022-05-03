import { Component, OnInit } from '@angular/core';
import { DatosService } from '../services/datos.service';
import {Datosmodels } from '../models/datosmodels';
@Component({
  selector: 'app-alajuela',
  templateUrl: './alajuela.component.html',
  styleUrls: ['./alajuela.component.css']
})
export class AlajuelaComponent implements OnInit {

  myimage:string = "assets/provincias/alajuela.png";

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

  
  let data = JSON.parse('{"coord":{"lon":-84.2102,"lat":10.0188},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":300.44,"feels_like":300.99,"temp_min":299.74,"temp_max":304.7,"pressure":1017,"humidity":52},"visibility":10000,"wind":{"speed":5.14,"deg":250},"clouds":{"all":40},"dt":1650477842,"sys":{"type":1,"id":7217,"country":"CR","sunrise":1650453827,"sunset":1650498436},"timezone":-21600,"id":3624955,"name":"Alajuela","cod":200}')
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
