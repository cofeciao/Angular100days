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
  cityName = '';
  textCityname = '';
  constructor(private weather: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(){
    this.cityName = this.textCityname;
    this.weather.getWeather(this.textCityname).subscribe((res: any) => {
      this.wea = res.main.temp;
      console.log(this.wea);
    });

  }

}
