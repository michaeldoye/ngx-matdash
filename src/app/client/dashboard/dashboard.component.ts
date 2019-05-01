import { Component, NgZone } from '@angular/core';
import { flyInOut } from '../../route.animation';
import { GapiAuthService } from '../../core/auth/gapiAuth.service';
import { LoadingService } from '../../core/utils/loading.service';

@Component({
  selector: 'ngxtemplate-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [flyInOut]
})
export class DashboardComponent {
  files: any[] = [];

  constructor(private gAuth: GapiAuthService, private zone: NgZone, private loader: LoadingService) {
    this.getFiles();
  }

  getFiles() {
    this.loader.isLoading.next(true);
    this.gAuth.getFiles().then(files => {
      this.zone.run(() => {
        this.files = files.result.files.filter(
          file => file.mimeType === 'application/vnd.google-apps.spreadsheet'
        );
        this.loader.isLoading.next(false);
      });
    });
  }

  importSheet(sheetId: string) {
    console.log(sheetId);
  }
}
