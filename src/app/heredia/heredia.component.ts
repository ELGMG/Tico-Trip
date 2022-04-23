import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heredia',
  templateUrl: './heredia.component.html',
  styleUrls: ['./heredia.component.css']
})
export class HerediaComponent implements OnInit {


  myimage:string = "assets/provincias/heredia.png";

  ClimaData:any;
  constructor() { }

  ngOnInit(): void {
this.getClimaData();
console.log(this.ClimaData)

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
