import {Component, Output} from "@angular/core";
import {Author, authors} from "../authors.model";


@Component({
  selector: 'authors-list',
  template: `
    <author-detail *ngFor="let author of authors" [author]="author" (select)="onSelected($event)" (delete)="onDeleted($event)"></author-detail>
    <div>This current author selected is {{currentAuthor.firstName}} {{currentAuthor.lastName}}</div>
  `
})
export class AuthorListsComponent {
  authors = authors;
  currentAuthor = authors[0];

  onSelected(selectedAuthor: Author){
    this.currentAuthor = selectedAuthor;
    console.log('selected')
  }

  // onDeleted(id: number){
  //   this.authors = this.authors.filter(author => {
  //    return author.id !== id;
  //   });
  //   if(this.currentAuthor.id === id){
  //     this.currentAuthor = authors[0];
  //   }
  // }

  onDeleted(id : number){
    for(let i = 0; i < authors.length; i++)
      if (this.currentAuthor.id !== id) {
        console.log(authors[i].id);
        this.authors.splice(authors[i].id)
      }

    if (this.currentAuthor.id !== id){
      this.currentAuthor = authors[0];
      // console.log(authors[0])
    }

    if (authors[0].id === id){

    }

  }
}
