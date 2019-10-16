import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSportComponent } from './create-sport.component';
import { CreateSportRoutingModule } from './create-sport-routing.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { FooterComponent } from '../../footer/footer.component';
@NgModule({
  declarations: [CreateSportComponent],
  imports: [
    CommonModule,
    CreateSportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class CreateSportModule { }
