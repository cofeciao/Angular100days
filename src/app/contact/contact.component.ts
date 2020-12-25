import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  constructor() {
  }

  contacts = [
    {id: 1, name: 'Truong', age: 11},
    {id: 2, name: 'Minh', age: 12},
    {id: 3, name: 'Hai', age: 15},
    {id: 4, name: 'Nguyen', age: 19}
  ];

  ngOnInit(): void {
  }

}
