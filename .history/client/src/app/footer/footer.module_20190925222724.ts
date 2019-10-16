import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
    {
        path: '',
        component: FooterComponent
    }
  ];
@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FooterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ] ,
  exports : [
    FooterComponent,
    RouterModule
  ],
})
export class FooterModule { }
