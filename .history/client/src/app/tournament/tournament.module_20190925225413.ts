import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentComponent } from './tournament.component';
import { TournamentRoutingModule } from './tournament-routing.module';
import { CreateTournamentModule } from './create-tournament/create-tournament.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';
import { SidebarModule } from '../sidebar/sidebar.module';
@NgModule({
  declarations: [TournamentComponent],
  imports: [
    CommonModule,
    TournamentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CreateTournamentModule,
    NavbarModule,
    FooterModule,
    SidebarModule
  ]
})
export class TournamentModule { }
