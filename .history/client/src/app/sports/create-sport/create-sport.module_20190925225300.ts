import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSportComponent } from './create-sport.component';
import { CreateSportRoutingModule } from './create-sport-routing.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from '../../navbar/navbar.module';
import { FooterModule } from '../../footer/footer.module';
import { SidebarModule } from '../../sidebar/sidebar.module';
@NgModule({
  declarations: [CreateSportComponent],
  imports: [
    CommonModule,
    CreateSportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    FooterModule,
    SidebarModule
  ]
})
export class CreateSportModule { }
