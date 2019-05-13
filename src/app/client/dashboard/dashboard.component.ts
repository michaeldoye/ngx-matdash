import {
  Component,
  NgZone,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { flyInOut } from '../../route.animation';
import { LoadingService } from '../../core/utils/loading.service';
import { MatDialog, MatSelectChange } from '@angular/material';
import { RadarConfig } from '../../core/config/radar.config';
import { GapiFilesService } from '../../core/utils/gapiFiles.service';
import { Observable } from 'rxjs';

declare function radar_visualization(config: RadarConfig): void;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngxtemplate-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [flyInOut]
})
export class DashboardComponent implements OnInit {
  @ViewChild('sheetPickerDialog') sheetPickerDialog: TemplateRef<MatDialog>;
  public selectedFileId: string;
  public showRadar: boolean;
  public files$: Observable<any>;

  constructor(
    private loader: LoadingService,
    public dialog: MatDialog,
    public fileService: GapiFilesService,
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.files$ = this.fileService.getDriveFiles();
    Promise.resolve().then(() => {
      this.dialog.open(this.sheetPickerDialog, { disableClose: true });
    });
  }

  public importSheet(event: MatSelectChange): void {
    this.showRadar = false;
    this.loader.isLoading.next(true);
    this.fileService
      .getDriveFileContents(event)
      .subscribe((radarData: RadarConfig) => {
        this.zone.run(() => {
          this.showRadar = true;
          setTimeout(() => radar_visualization(radarData), 0);
          this.loader.isLoading.next(false);
          this.dialog.closeAll();
        });
      });
  }
}
