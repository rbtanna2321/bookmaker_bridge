import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from '../authentication/authentication.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  credentials: TokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    user_name: '',
    password: ''

  };
  constructor(private auth: AuthenticationService , private router: Router) { }

  register() {
    console.log(this.credentials)
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/login');
    },
    err => {
      console.error(err);
    });
  }
  ngOnInit() {
  }

}
