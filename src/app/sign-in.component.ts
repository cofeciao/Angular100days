import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  template: `
    <form (ngSubmit)="onSubmit(SignInForm)" [formGroup]="SignInForm">
      <input type="text" placeholder="Enter your username" formControlName='email'>
      <p *ngIf="SignInForm.get('email').invalid && SignInForm.get('email').touched">Email is invalid</p>
      <br>
      <input type="password" placeholder="Enter your password" formControlName='password'>
        <div formGroupName="subjects">
          <label [ngStyle]="{'font-size': '12px'}"><input type="checkbox" formControlName="remember">Remember</label>
          <label [ngStyle]="{'font-size': '12px'}"><input type="checkbox" formControlName="note">Note</label>
          <label [ngStyle]="{'font-size': '12px'}"><input type="checkbox" formControlName="write">Write</label>
        </div>
      <br>
      <button [disabled]="SignInForm.invalid">Submit</button>
      <button (click)="postToYii2(SignInForm)">POST</button>
    </form>
<p>{{SignInForm.controls.email.errors | json}}</p>
    <p>{{ SignInForm.errors | json }}</p>
    <p>{{ SignInForm.value | json }}</p>
  `,
  styles: [`input.ng-invalid.ng-touched {
    border: 1px solid red
  }`]
})

export class SignInComponent implements OnInit{
  SignInForm: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder) {
  }

  onSubmit(SignInForm) {
    console.log(SignInForm.value);
  }

  gmailValidator(formControl : FormControl){
    if (formControl.value.includes('@gmail.com')){
      return null;
    }
    return {gmail: true};
  }

  ngOnInit() {
    this.SignInForm = this.fb.group({
      email: ['', [Validators.required,this.gmailValidator]],
      password: ['',Validators.required],
      subjects: this.fb.group({
        remember: false,
        note: false,
        write: false
      }),
    });
  }

  postToYii2(SignInForm) {
    const url = 'http://iway.tm/api/v2/app/forgot-password';
    // const header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        charset: 'UTF-8',
        'Access-Control-Allow-Origin': '*'
      })
    };
    const body: any = {phone: '0798263419'};

    // console.log(typeof body);
    // this.http.post(url, body, httpOptions).subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
      // (err: HttpErrorResponse) => {
      //   if (err.error instanceof Error) {
      //     console.log('Client-side error occured.');
      //   } else {
      //     console.log('Server-side error occured.');
      //   }
      // }
    // );

    // const abc = this.http.get('http://iway.tm/api/v2/app/show-list-articles');
    // abc.subscribe((data) => {
    //   console.log(data);
    // });
  }
}
