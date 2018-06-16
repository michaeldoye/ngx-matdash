import { Component } from '@angular/core';
import { ThemeService } from '@core/utils/theme.service';
import { NetworkService } from '@core/utils/network.service';
import { LoadingService } from '@core/utils/loading.service';
import { WorkerService } from '@core/utils/worker.service';
import { fadeInOut } from '@core/utils/route.animation';

@Component({
  selector: 'ngxtemplate-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOut]
})
export class AppComponent {

  public title = 'App Title';

  constructor(
    public theme: ThemeService,
    public network: NetworkService,
    public loader: LoadingService,
    private sw: WorkerService) {

      // check the service worker for updates
      this.sw.checkForUpdates();
  }
}
