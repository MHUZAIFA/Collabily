import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { User } from 'src/app/register/registration-form/registration-form.component';
import { Router } from '@angular/router';
// import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass'],
})
export class SignInComponent implements OnInit {

  showPassword: boolean = false;
  error: string = '';

  loginFormGroup: FormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(private _formBuilder: FormBuilder, private _location: Location,  private _router: Router) {}

  ngOnInit(): void {
    // this._stateService.redirectToDashboard();
    // this._stateService.setTheme('#f1f3f2');
  }

  back() {
    this._location.back();
  }

  signIn() {
    this.error = '';
    const email = this.loginFormGroup.get('email')?.value;
    const password = this.loginFormGroup.get('password')?.value;
    const users: User[] = JSON.parse(localStorage.getItem('users') as string) as User[];
    if(users) {
      const user: User | undefined = users.find(u => u.email.trim() === email);
      if (user) {
        if (user.password.trim() === password.trim()) {
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          this._router.navigate(['dashboard']);
        } else {
          this.error = 'Incorrect email id or password.'
        }

      } else {
        this.error = 'User not found.'
      }
    }
  }
}
