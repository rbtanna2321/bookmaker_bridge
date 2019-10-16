import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { MatchComponent } from './match.component';
import { CreateMatchModule } from './create-match/create-match.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';
import { SidebarModule } from '../sidebar/sidebar.module';
@NgModule({
  declarations: [MatchComponent],
  imports: [
    CommonModule,
    MatchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CreateMatchModule,
    NavbarModule,
    FooterModule,
    SidebarModule
  ]
})
export class MatchModule { }
