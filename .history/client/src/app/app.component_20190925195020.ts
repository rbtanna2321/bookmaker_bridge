import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private auth: AuthenticationService , private router: Router) { }
  title = 'Book Maker';
}
