import { Component, OnInit } from '@angular/core';
import { DatosService } from '../services/datos.service';
import {Datosmodels } from '../models/datosmodels';
@Component({
  selector: 'app-heredia',
  templateUrl: './heredia.component.html',
  styleUrls: ['./heredia.component.css']
})
export class HerediaComponent implements OnInit {


  myimage:string = "assets/provincias/heredia.png";

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
    if (dato == "6270d3178b056a960d7cf4e5") {
    let x=document.getElementById('cambiar');
    x!.innerHTML = "<img  style='width: 400px;' src='../../assets/lugares/herediamiradorsanjose.png'   >";
  
    } else  if (dato == "6270d3328b056a960d7cf4e6") {
      let x=document.getElementById('cambiar');
      x!.innerHTML = "<img  style='width: 350px;  ' src='../../assets/lugares/herediacerroguarari.png '  >";
    }
    else  if (dato == "6270d3518b056a960d7cf4e8") {
      let x=document.getElementById('cambiar');
      x!.innerHTML = "<img  style='width: 350px;  ' src='../../assets/lugares/herediamuseocultura.png '  >";
    }
    else  if (dato == "6270d35d8b056a960d7cf4e9") {
      let x=document.getElementById('cambiar');
      x!.innerHTML = "<img  style='width: 350px;  ' src='../../assets/lugares/herediariopozoazul.png '  >";
    }
  
   }
   
  


getClimaData(){

  
  let data = JSON.parse('{"coord":{"lon":-84.1012,"lat":10.0116},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":298.38,"feels_like":298.29,"temp_min":297.84,"temp_max":302.25,"pressure":1017,"humidity":51},"visibility":10000,"wind":{"speed":5.14,"deg":250},"clouds":{"all":40},"dt":1650478209,"sys":{"type":2,"id":2004086,"country":"CR","sunrise":1650453801,"sunset":1650498410},"timezone":-21600,"id":3621683,"name":"Heredia","cod":200}')
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
