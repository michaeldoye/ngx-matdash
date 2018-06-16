import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RoutingModule } from '../../app.routing.module';
import { AngularFireAuth } from 'angularfire2/auth';
import { SidenavComponent } from '@shared/sidenav/sidenav.component';
import { ToolbarComponent } from '@shared/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
  ],
  declarations: [
    SidenavComponent,
    ToolbarComponent
  ],
  exports: [
    SidenavComponent,
    ToolbarComponent
  ],
  providers: [AngularFireAuth],
})
export class SharedModule { }
