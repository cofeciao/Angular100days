import {Component} from "@angular/core";

@Component({
  selector: 'app-sign-in',
  template: `
    <form (submit)="onSubmit(SignInForm)" #SignInForm="ngForm">
      <input type="text" [(ngModel)]="email" placeholder="Enter your username" name="username">
      <br><br>
      <input type="password" [(ngModel)]="password" placeholder="Enter your password" name="password">
      <br><br>
      <button>Submit</button>
    </form>
  `
})

export class SignInComponent {
  email = '';
  password = '';
  onSubmit(SignInForm){
    console.log(SignInForm);
  }
}
