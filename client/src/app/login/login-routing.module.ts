import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../authentication/authentication.service';
import { AuthGuardService } from '../authentication/auth-guard.service';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthenticationService , AuthGuardService],
})
export class LoginRoutingModule { }
