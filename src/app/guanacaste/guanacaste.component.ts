import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guanacaste',
  templateUrl: './guanacaste.component.html',
  styleUrls: ['./guanacaste.component.css']
})
export class GuanacasteComponent implements OnInit {


  myimage:string = "assets/provincias/guanacaste.png";

  ClimaData:any;
  constructor() { }

  ngOnInit(): void {
this.getClimaData();
console.log(this.ClimaData)

  }

getClimaData(){

  
  let data = JSON.parse('{"coord":{"lon":-85.4409,"lat":10.6359},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":306.72,"feels_like":307.39,"temp_min":306.72,"temp_max":306.72,"pressure":1012,"humidity":38},"visibility":10000,"wind":{"speed":3.09,"deg":150},"clouds":{"all":40},"dt":1650478100,"sys":{"type":1,"id":7210,"country":"CR","sunrise":1650454091,"sunset":1650498764},"timezone":-21600,"id":3623076,"name":"Liberia","cod":200}')
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
