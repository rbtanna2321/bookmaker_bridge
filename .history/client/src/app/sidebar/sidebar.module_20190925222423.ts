import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarComponent } from './sidebar.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    SidebarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports : [
    SidebarComponent,
    RouterModule
  ],
})
export class SidebarModule { }
