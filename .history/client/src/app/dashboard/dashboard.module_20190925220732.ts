import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { NavbarModule } from '../navbar/navbar-routing.module';
import { FooterModule } from '../footer/footer-routing.module';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    FooterModule
  ]
})
export class DashboardModule { }
