import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from '../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  credentials: TokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    user_name: '',
    password: ''

  };

  constructor(private auth: AuthenticationService , private router: Router) { }

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/dashboard');
    },
    err => {
      console.error(err);
    });
  }

}
