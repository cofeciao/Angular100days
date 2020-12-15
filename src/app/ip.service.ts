import { Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class IpService {
  constructor(private http: HttpClient) {}

  public getIp() {
      return this.http.get('http://api.ipify.org/?format=json');
  }
}
