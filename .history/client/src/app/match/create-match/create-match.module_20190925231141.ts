import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { CreateMatchRoutingModule } from './create-match-routing.module';
import { CreateMatchComponent } from './create-match.component';

import { NavbarModule } from '../../navbar/navbar.module';
import { FooterModule } from '../../footer/footer.module';
import { SidebarModule } from '../../sidebar/sidebar.module';
@NgModule({
  declarations: [CreateMatchComponent],
  imports: [
    CommonModule,
    CreateMatchRoutingModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreateMatchModule { }
