import { Component } from '@angular/core';
import { NetworkService } from './core/utils/network.service';
import { WorkerService } from './core/utils/worker.service';
import { ThemeService } from './core/utils/theme.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { fadeInOut, spinInOut, preventInitial } from './route.animation';
import { SidenavService } from './client/sidenav/sidenav.service';
import { LoadingService } from './core/utils/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInOut, spinInOut, preventInitial]
})
export class AppComponent {

  public title = 'App Title';

  constructor(
    public theme: ThemeService,
    public sv: SidenavService,
    public network: NetworkService,
    public loader: LoadingService,
    public auth: AngularFireAuth,
    private sw: WorkerService) {

      // check the service worker for updates
      this.sw.checkForUpdates();
  }
}
