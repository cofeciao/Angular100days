import {Component, Input, OnInit, SimpleChange} from '@angular/core';

@Component({
  selector: "progress-bar",
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  _avatarUrl : string = '';
  private $username = 'string';
  private _progress = 50;

  backgroundColor = 'string';
  @Input() progressColor = 'string';
  @Input() set progress(val: number){
      if (typeof val !== 'number') {
        const progress = Number(val);
        console.log(progress);
        if (Number.isNaN(progress)) {
          this.progress = 50;
        } else {
          this.progress = progress;
        }
      }
  this._progress = val;
  };

  get progress() {
    return this._progress;
  };

  @Input() set avatarUrl(value: string)
  {
    this._avatarUrl = value.trim();
  }

  get avatarUrl(){
    return this._avatarUrl;
  }

  constructor() {

  }

  ngOnInit(): void {
    if(!this.avatarUrl){
      throw new Error('progress value is required ')
    }
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges',{
  //     progress : this.progress,
  //     backgroundColor : this.backgroundColor,
  //     progressColor : this.progressColor
  //   })
  // }
}
