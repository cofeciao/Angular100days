import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IpService} from './ip.service';

@Component({
  selector: 'app-ip',
  template : '<h3>My IP adress: {{ip}}</h3>',
  providers: [IpService]
})

export class IpComponent implements OnInit{
  ip: string;
  constructor(private ipService: IpService ) {}

  ngOnInit() {
    this.getIP();
  }

  getIP(){
    this.ipService.getIp()
      .subscribe((res:any) => {
        this.ip = res.ip;
      });
  }
}
