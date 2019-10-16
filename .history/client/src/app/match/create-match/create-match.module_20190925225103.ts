import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateMatchRoutingModule } from './create-match-routing.module';
import { CreateMatchComponent } from './create-match.component';

import { NavbarComponent } from '../../navbar/navbar.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { FooterComponent } from '../../footer/footer.component';
@NgModule({
  declarations: [CreateMatchComponent],
  imports: [
    CommonModule,
    CreateMatchRoutingModule,
    NavbarModule,
    FooterModule,
    SidebarModule
  ]
})
export class CreateMatchModule { }
