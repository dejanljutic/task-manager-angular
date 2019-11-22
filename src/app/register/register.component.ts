import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    name: '',
    age: 0,
    email: '',
    password: ''
  };
  invalidUsername = '';
  invalidEmail = '';
  invalidPassword = '';
  usernameError = '';
  emailError = '';
  passwordError = '';

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this.auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.auth.loggedUser = res;
          this.auth.isLoggedIn = true;
          this.router.navigate(['/tasks']);
        },
        err => {
          this.validateUser(err);
        }
      );
  }

  validateUser(err) {
    this.invalidUsername = '';
    this.invalidEmail = '';
    this.invalidPassword = '';
    this.usernameError = '';
    this.emailError = '';
    this.passwordError = '';

    const error = err.error.errors;

    if (err.error.errmsg) {
      this.invalidEmail = 'is-invalid';
      this.emailError = 'E-mail address already in use.';
    }

    if (error) {
      if (error.name) {
        this.invalidUsername = 'is-invalid';
        this.usernameError = 'Username is required.';
      }

      if (error.email) {
        if (error.email.kind === 'required') {
          this.invalidEmail = 'is-invalid';
          this.emailError = 'Email is required.';
        }

        if (error.email.kind === 'user defined') {
          this.invalidEmail = 'is-invalid';
          this.emailError = 'Please provide a valid e-mail address.';
        }
      }

      if (error.password) {
        if (error.password.kind === 'required') {
          this.invalidPassword = 'is-invalid';
          this.passwordError = 'Password is required.';
        }

        if (error.password.kind === 'minlength' || error.password.kind === 'user defined') {
          this.invalidPassword = 'is-invalid';
          this.passwordError = 'Please choose a stronger password.';
        }
      }
    }
  }
}
