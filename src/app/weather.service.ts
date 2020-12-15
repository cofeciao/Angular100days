import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private http: HttpClient) {}

  public getWeather(cityName: string) {
    const url = 'http://api.openweathermap.org/data/2.5/weather?appid=f51159235361d6fbc288ae801182ef05&q=' + cityName;
    return this.http.get(url);
  }
}
