import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './match.component';
import { CreateMatchComponent } from '../match/create-match/create-match.component';

const routes: Routes = [
  {
      path: '',
      component: MatchComponent
  },
  {
      path: 'create-match',
      component: CreateMatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
