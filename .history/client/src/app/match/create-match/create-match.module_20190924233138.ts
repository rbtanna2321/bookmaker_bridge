import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateMatchRoutingModule } from './create-match-routing.module';
import { CreateMatchComponent } from './create-match.component';

@NgModule({
  declarations: [CreateMatchComponent],
  imports: [
    CommonModule,
    CreateMatchRoutingModule
  ]
})
export class CreateMatchModule { }
