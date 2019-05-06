import { Component, Input } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';
import { spinInOut, preventInitial } from '../../route.animation';
import { GapiAuthService } from '../../core/auth/gapiAuth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngxtemplate-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [spinInOut, preventInitial]
})
export class ToolbarComponent {
  @Input() appTitle: string;

  constructor(
    public sidenav: SidenavService,
    public gAuth: GapiAuthService
  ) {}
}
