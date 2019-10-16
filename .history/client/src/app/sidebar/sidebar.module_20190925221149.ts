import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarComponent } from './sidebar.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    SidebarRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SidebarModule { }
