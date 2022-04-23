import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartago',
  templateUrl: './cartago.component.html',
  styleUrls: ['./cartago.component.css']
})
export class CartagoComponent implements OnInit {

  myimage:string = "assets/provincias/cartago.png";


  ClimaData:any;
  constructor() { }

  ngOnInit(): void {
this.getClimaData();
console.log(this.ClimaData)

  }

getClimaData(){

  
  let data = JSON.parse('{"coord":{"lon":-83.8687,"lat":9.8309},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":300.65,"feels_like":300.58,"temp_min":297.2,"temp_max":301.53,"pressure":1015,"humidity":43,"sea_level":1015,"grnd_level":878},"visibility":10000,"wind":{"speed":1.42,"deg":21,"gust":2.3},"clouds":{"all":97},"dt":1650476283,"sys":{"type":2,"id":2040898,"country":"CR","sunrise":1650453755,"sunset":1650498345},"timezone":-21600,"id":3622547,"name":"Paraíso","cod":200}')
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
