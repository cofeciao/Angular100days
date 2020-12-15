import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  wea: string;
  constructor(private weather: WeatherService) { }

  ngOnInit(): void {
  }

  getWeather(){
    this.weather.getWeather().subscribe((res: any) => {
      this.wea = res.main.temp;
    });

  }

}
