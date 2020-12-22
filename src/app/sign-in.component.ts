import {Component} from "@angular/core";
import { HttpClient , HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-sign-in',
  template: `
    <form (ngSubmit)="onSubmit(SignInForm)" #SignInForm="ngForm">
      <tr>
        <td>
          <input type="text" ngModel #txtEmail="ngModel" placeholder="Enter your username" name="email" required email>
        </td>
        <td>
          <div *ngIf="txtEmail.errors?.required && txtEmail.touched">
            <p [ngStyle]="{'font-size' : '12px'}">Email is required</p>
          </div>
          <div *ngIf="txtEmail.errors?.email && txtEmail.touched">
            <p [ngStyle]="{'font-size' : '12px'}">Email is invalid</p>
          </div>
        </td>
      </tr>
      <br>
      <tr>
        <td>
          <input type="password" ngModel #txtPassword = "ngModel" placeholder="Enter your password" name="password" required>
        </td>
        <td>
          <p [ngStyle]="{'font-size': '12px'}" *ngIf="txtPassword.touched && txtPassword.errors?.required">
            Password is blank
          </p>
        </td>
      </tr>
      <div ngModelGroup="subjects">
        <label [ngStyle]="{'font-size': '12px'}"><input [ngModel]="false" type="checkbox" name="Remember">Remember</label>
        <label [ngStyle]="{'font-size': '12px'}"><input [ngModel]="false" type="checkbox" name="Note">Note</label>
        <label [ngStyle]="{'font-size': '12px'}"><input [ngModel]="false" type="checkbox" name="Write">Write</label>
      </div>
      <br>
      <button [disabled]="SignInForm.invalid">Submit</button>
      <button (click)="postToYii2()">POST</button>
    </form>
    <p>{{ txtEmail.errors | json }}</p>
    <p>{{ SignInForm.value | json }}</p>
  `,
  styles: [`input.ng-invalid.ng-touched {border: 1px solid red}`]
})

export class SignInComponent {

  constructor(private http : HttpClient) {
  }

  onSubmit(SignInForm){
    // console.log(SignInForm);
  }

  postToYii2(){
    const url = 'http://iway.tm/api/v2/app/login-customer';
    const headers = new HttpHeaders().set('x-api-key', 'rcc6aC6HfUpenPJs9OP49xqysRJTmpbvfXgIpThw');
    const body = JSON.stringify({ 'phone': '0798263419', 'password': 123123});
    this.http.post(url,body,{headers: headers}).toPromise()
      .then(res => res);
      // .then(res => console.log(res));
  }
}
