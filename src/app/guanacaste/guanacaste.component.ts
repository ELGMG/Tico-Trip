import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { DatosService } from '../services/datos.service';
import {Datosmodels } from '../models/datosmodels';

console.log('entra');
@Component({
  selector: 'app-guanacaste',
  templateUrl: './guanacaste.component.html',
  styleUrls: ['./guanacaste.component.css']
})
export class GuanacasteComponent implements OnInit {
  myimage: string = "assets/provincias/guanacaste.png";
  ClimaData: any;
 
  listModels =  Datosmodels;
  Seleccionado : any;
 
 
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
  if (dato == "626caa3d98620e391b20029d") {
  let x=document.getElementById('cambiar');
  x!.innerHTML = "<img  style='width: 400px;' src='../../assets/lugares/guanacastethecongo.png'   >";

  } else  if (dato == "6270c5608b056a960d7cf4c4") {
    let x=document.getElementById('cambiar');
    x!.innerHTML = "<img  style='width: 350px;  ' src='../../assets/lugares/guanacasteriobebedero.png'  >";
  }
  else  if (dato == "6270c5ad8b056a960d7cf4c9") {
    let x=document.getElementById('cambiar');
    x!.innerHTML = "<img  style='width: 350px;  ' src='../../assets/lugares/guanacasteconchal.png '  >";
  }
  else  if (dato == "6270c5c48b056a960d7cf4ca") {
    let x=document.getElementById('cambiar');
    x!.innerHTML = "<img  style='width: 350px;  ' src='../../assets/lugares/guanacastevolcanmiravalles.png '  >";
  }

 }
 


 



  getClimaData() {


    let data = JSON.parse('{"coord":{"lon":-85.4409,"lat":10.6359},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":306.72,"feels_like":307.39,"temp_min":306.72,"temp_max":306.72,"pressure":1012,"humidity":38},"visibility":10000,"wind":{"speed":3.09,"deg":150},"clouds":{"all":40},"dt":1650478100,"sys":{"type":1,"id":7210,"country":"CR","sunrise":1650454091,"sunset":1650498764},"timezone":-21600,"id":3623076,"name":"Liberia","cod":200}')
    this.setClimaData(data);
  }

  setClimaData(data: any) {

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

  funcion(){
    console.log("siiiiiiiii!!");
  }

}

