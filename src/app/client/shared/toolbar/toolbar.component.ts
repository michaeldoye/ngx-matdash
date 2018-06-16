import { Component, Input } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ThemeService } from '@core/utils/theme.service';
import { spinInOut, preventInitial } from '@core/utils/route.animation';
import { SidenavService } from '@shared/sidenav/sidenav.service';

@Component({
  selector: 'ngxtemplate-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [spinInOut, preventInitial]
})
export class ToolbarComponent {

  @Input() appTitle: string;

  constructor(
    public theme: ThemeService,
    public sidenav: SidenavService,
    public auth: AngularFireAuth
  ) { }

}
