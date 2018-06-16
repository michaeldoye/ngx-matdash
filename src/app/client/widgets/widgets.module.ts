import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class WidgetsModule { }
