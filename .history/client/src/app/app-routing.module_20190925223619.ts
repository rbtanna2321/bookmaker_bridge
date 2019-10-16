import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import { AuthGuardService } from './authentication/auth-guard.service';
import { AuthenticationService } from './authentication/authentication.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' , canActivate: [AuthGuardService]},
  { path: 'forms', component: FormsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordions', component: AccordionsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'progressbar', component: ProgressbarComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'dropdowns', component: DropdownComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'sports', loadChildren: './sports/sports.module#SportsModule' , canActivate: [AuthGuardService]},
  { path: 'tournament', loadChildren: './tournament/tournament.module#TournamentModule' , canActivate: [AuthGuardService]},
  { path: 'match', loadChildren: './match/match.module#MatchModule' , canActivate: [AuthGuardService]},
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationService , AuthGuardService],
})
export class AppRoutingModule { }
