import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentComponent } from './tournament.component';
import { TournamentRoutingModule } from './tournament-routing.module';
import { CreateTournamentModule } from './create-tournament/create-tournament.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
// import { NavbarComponent } from '../navbar/navbar.component';
// import { SidebarComponent } from '../sidebar/sidebar.component';
// import { FooterComponent } from '../footer/footer.component';
@NgModule({
  declarations: [TournamentComponent],
  imports: [
    CommonModule,
    TournamentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CreateTournamentModule,
    // SidebarComponent,
    // NavbarComponent,
    // FooterComponent
  ]
})
export class TournamentModule { }
