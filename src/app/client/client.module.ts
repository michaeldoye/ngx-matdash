import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from '@page/pages.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PagesModule,
    SharedModule
  ],
  exports: [
    SharedModule,
    PagesModule
  ]
})
export class ClientModule { }
