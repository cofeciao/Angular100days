import {Component} from "@angular/core";

@Component({
  selector: 'app-sign-in',
  template: `
    <form (ngSubmit)="onSubmit(SignInForm)" #SignInForm="ngForm">
      <tr>
        <td>
          <input type="text" ngModel #txtEmail = ngModel placeholder="Enter your username" name="email" required>
        </td>
        <td>
          <p *ngIf="txtEmail.invalid && txtEmail.touched">
            Email is invalid
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <input type="password" ngModel #txtPassword = ngModel placeholder="Enter your password" name="password" required>
        </td>
        <td>
          <p *ngIf="txtPassword.touched && txtPassword.invalid">
            password is blank
          </p>
        </td>
      </tr>
      <button [disabled]="SignInForm.invalid">Submit</button>
    </form>
  `,
  styles: [`input.ng-invalid.ng-touched {border: 1px solid red}`]
})

export class SignInComponent {
  onSubmit(SignInForm){
    console.log(SignInForm);
  }
}
