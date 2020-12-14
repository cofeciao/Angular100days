import {Component, Input, OnInit} from '@angular/core';
import {Author, authors} from '../authors.model'
@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors = authors;
  currentAuthor = authors[0];

  onSelected(selectedAuthor : Author){
    this.currentAuthor = selectedAuthor;
  }

  onDeleted(id : number){
    this.authors = this.authors.filter(author => {
      return author.id !== id;
    });

    if (this.currentAuthor.id === id){
      this.currentAuthor = authors[0];
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
