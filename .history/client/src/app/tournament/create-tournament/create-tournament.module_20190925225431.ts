import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTournamentComponent } from './create-tournament.component';
import { CreateTournamentRoutingModule } from './create-tournament-routing.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
// import { NavbarComponent } from '../../navbar/navbar.component';
// import { SidebarComponent } from '../../sidebar/sidebar.component';
// import { FooterComponent } from '../../footer/footer.component';
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
