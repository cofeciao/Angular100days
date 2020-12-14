import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Author} from "../authors.model";

@Component({
  selector: 'author-detail',
  template: `
    <div>
      {{author.firstName}} {{author.lastName}}
      <button (click)="select.emit(author)">V</button>
      <button (click)="delete.emit(author.id)">X</button>
    </div>
  `,
})
export class AuthorDetailsComponent {
  @Input() author: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
}
