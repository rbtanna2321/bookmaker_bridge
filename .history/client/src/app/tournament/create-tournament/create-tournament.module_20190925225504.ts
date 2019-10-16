import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTournamentComponent } from './create-tournament.component';
import { CreateTournamentRoutingModule } from './create-tournament-routing.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from '../../navbar/navbar.module';
import { FooterModule } from '../../footer/footer.module';
import { SidebarModule } from '../../sidebar/sidebar.module';
@NgModule({
  declarations: [CreateTournamentComponent],
  imports: [
    CommonModule,
    CreateTournamentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    FooterModule,
    SidebarModule
  ]
})
export class CreateTournamentModule { }
