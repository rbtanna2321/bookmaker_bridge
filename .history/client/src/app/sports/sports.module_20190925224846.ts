import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsComponent } from './sports.component';
import { SportsRoutingModule } from './sports-routing.module';
import { CreateSportModule } from './create-sport/create-sport.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
 import { SidebarComponent } from '../sidebar/sidebar.component';
 import { FooterComponent } from '../footer/footer.component';
@NgModule({
  declarations: [SportsComponent],
  imports: [
    CommonModule,
    SportsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CreateSportModule,
     SidebarComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class SportsModule { }
