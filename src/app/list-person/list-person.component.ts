import { Component, OnInit } from '@angular/core';
import {count} from "rxjs/operators";
import {ajaxGet} from "rxjs/internal-compatibility";

export const arrWords = [
  { id: 1, en: 'action', vn: 'hành động', memorized: true },
  { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
  { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
  { id: 4, en: 'active', vn: 'chủ động', memorized: true },
  { id: 5, en: 'bath', vn: 'tắm', memorized: false },
  { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
];

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  // @Input() name : string;
  // @Input() age : number;

  arrPerson = [
    {name: 'Tèo', age: 18},
    {name: 'Minh', age: 20},
    {name: 'Nhân', age: 19},
    {name: 'Nghĩa', age: 17}
  ]

  arrWord = arrWords;
  newEn : string = '';
  newVie : string = '';
  hiddenForm : boolean = true;
  filterStatus = 'Xem_All';

  removePerson(name : string){
    const index = this.arrPerson.findIndex(person => person.name === name);
    console.log(index);
    this.arrPerson.splice(index,1);
  }

  newWord(){
    if (this.newEn && this.newVie != '') {
      this.arrWord.unshift({
        id : this.arrWord.length + 1,
        en : this.newEn,
        vn : this.newVie,
        memorized: false,
      });
    }
  }

  deleteItem(id : number) : void{
    const index = this.arrWord.findIndex(e => e.id == id);
    this.arrWord.splice(index,1);
  }

  formHidden() : boolean{
    return this.hiddenForm = !this.hiddenForm
  }

  filterList(memorized : boolean){
    // const Xem_all = this.filterStatus === 'Xem_All';
    // const Xem_true = this.filterStatus === 'True' && memorized;
    // const Xem_false = this.filterStatus === 'False' && !memorized;
    // return Xem_all || Xem_true || Xem_false;
    if(this.filterStatus === 'Xem_All')
      return true;
    return ((this.filterStatus === 'True') === memorized)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
