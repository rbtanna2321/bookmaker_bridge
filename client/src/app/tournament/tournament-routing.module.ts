import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TournamentComponent } from './tournament.component';
import { CreateTournamentComponent } from '../tournament/create-tournament/create-tournament.component';

const routes: Routes = [
    {
        path: '',
        component: TournamentComponent
    },
    {
        path: 'create-tournament',
        component: CreateTournamentComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TournamentRoutingModule { }
