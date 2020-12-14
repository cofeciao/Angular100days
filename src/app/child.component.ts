import {Component,Output,EventEmitter} from "@angular/core";

@Component({
  selector: 'app-child',
  template: `
    <div>
      <h3>{{value}}</h3>
    </div>
  `
})

export class ChildComponent {

  @Output() myClick = new EventEmitter<boolean>();

  value : number = 0;
  // add(){
  //   this.myClick.emit(true);
  // }
  // sub(){
  //   this.myClick.emit(false)
  // }
}

