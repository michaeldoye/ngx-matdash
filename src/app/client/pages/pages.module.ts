import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsModule } from '../widgets/widgets.module';
import { MaterialModule } from '../../material.module';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from '@page/home/home.component';
import { LoginPageComponent } from '@page/login-page/login-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    WidgetsModule,
    SatPopoverModule
  ],
  declarations: [
    HomeComponent,
    LoginPageComponent
  ],
  exports: [
    HomeComponent,
    LoginPageComponent
  ]
})
export class PagesModule { }
