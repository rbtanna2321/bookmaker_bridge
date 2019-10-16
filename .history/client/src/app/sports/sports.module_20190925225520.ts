import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsComponent } from './sports.component';
import { SportsRoutingModule } from './sports-routing.module';
import { CreateSportModule } from './create-sport/create-sport.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';
import { SidebarModule } from '../sidebar/sidebar.module';
@NgModule({
  declarations: [SportsComponent],
  imports: [
    CommonModule,
    SportsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CreateSportModule,
    NavbarModule,
    FooterModule,
    SidebarModule
  ]
})
export class SportsModule { }
