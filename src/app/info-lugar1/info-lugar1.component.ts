import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-lugar1',
  templateUrl: './info-lugar1.component.html',
  styleUrls: ['./info-lugar1.component.css']
})
export class InfoLugar1Component implements OnInit {



  image1:string = "assets/Lugar1/1.jpg";

  image2:string = "assets/Lugar1/2.jpg";

  image3:string = "assets/Lugar1/3.jpg";


  constructor() { }

  ngOnInit(): void {
  }

}
