import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
import {log} from 'util';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  wea: number;
  cityName = '';
  textCityname = '';
  isLoading = false;
  constructor(private weather: WeatherService) { }

  ngOnInit(): void {
    // this.getWeather();
  }

  getWeather(){
    this.isLoading = true;
    this.cityName = this.textCityname;
    this.weather.getWeather(this.textCityname).toPromise().then((weather: any) => {
      this.wea = weather.main.temp;
      this.wea = this.wea / 10;
      this.wea = Math.ceil(this.wea);
      this.isLoading = false;
    }).catch(err => alert(err.error.message));
  }

  getMessage(){
    if (this.isLoading){
      return 'Loading...';
    }
    return this.cityName === '' ? 'Enter your city name' : (this.cityName + ' is now ' + this.wea + ' C');
  }
}
