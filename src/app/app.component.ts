import {Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ToggleComponent} from "./toggle/toggle.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular100days';
  isChecked = true;
  currentProgress = 70;
  url = 'low';
  showLast = true;
  @ViewChildren(ToggleComponent) toggleComp: QueryList<ToggleComponent>;
  @ViewChild('nameInput',{static:true}) nameInput: ElementRef<HTMLInputElement>;

  ngOnInit(){
    // setTimeout(() => {
    //   this.nameInput.nativeElement.focus();
    // }, 3000)
    // console.log('Onit');
  }

  ngAfterViewInit(){
    console.log(this.toggleComp);
    this.toggleComp.changes.subscribe(console.log);
  }

  tags = [
    'angular',
    'typescript',
    'ng100days'
  ]
}


