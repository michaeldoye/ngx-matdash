import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { AngularFireAuth } from 'angularfire2/auth';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RoutingModule } from '../app.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    SatPopoverModule,
    RoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    HomeComponent,
    LoginPageComponent,
    SidenavComponent,
    DashboardComponent,
    ToolbarComponent
  ],
  providers: [AngularFireAuth],
  exports: [
    HomeComponent,
    LoginPageComponent,
    SidenavComponent,
    ToolbarComponent
  ]
})
export class ClientModule {}
