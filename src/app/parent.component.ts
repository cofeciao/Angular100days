import {Component,ViewChild} from "@angular/core";
import {ChildComponent} from "./child.component";

@Component({
  selector: 'app-parent',
  template: `
    <div>
      <button (click)="addChild(true)">Add for child</button>
      <button (click)="addChild(false)">Minus for child</button>
      <app-child></app-child>
      <ng-content></ng-content>
    </div>
  `
})

export class ParentComponent {

  @ViewChild(ChildComponent)
  myChild : ChildComponent;
  value : number = 0;

  addChild(isAdd : boolean){
    isAdd ? this.myChild.value++ : this.myChild.value--;
  }

  changeValue(isAdd : boolean) {
    isAdd ? this.value++ : this.value--;
  }
}
