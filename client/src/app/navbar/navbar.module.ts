import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
    {
        path: '',
        component: NavbarComponent
    }
  ];
@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports : [
    NavbarComponent,
    RouterModule
  ],
})
export class NavbarModule { }
