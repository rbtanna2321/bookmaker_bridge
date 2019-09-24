import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SportsComponent } from './sports.component';
import { CreateSportComponent } from '../sports/create-sport/create-sport.component';

const routes: Routes = [
    {
        path: '',
        component: SportsComponent
    },
    {
        path: 'create-sport',
        component: CreateSportComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SportsRoutingModule { }
