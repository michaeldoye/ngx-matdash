import {
  Component,
  NgZone,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { fadeInOut } from '../../route.animation';
import { LoadingService } from '../../core/utils/loading.service';
import {
  MatCheckboxChange,
  MatDialog,
  MatSelectChange
} from '@angular/material';
import { RadarConfig } from '../../core/config/radar.config';
import { GapiFilesService } from '../../core/utils/gapiFiles.service';
import { Observable } from 'rxjs';
import { StorageService } from '../../core/utils/storage.service';

declare function radar_visualization(config: RadarConfig): void;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngxtemplate-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [fadeInOut]
})
export class DashboardComponent implements OnInit {
  @ViewChild('sheetPickerDialog') sheetPickerDialog: TemplateRef<MatDialog>;
  public showRadar: boolean;
  public files$: Observable<any>;
  public saveSelection: boolean;
  public fileObject: any = {
    value: ''
  };

  constructor(
    public dialog: MatDialog,
    public fileService: GapiFilesService,
    private loader: LoadingService,
    private zone: NgZone,
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.files$ = this.fileService.getDriveFiles();
    this.storage.storageValue$.subscribe((value: any) => {
      this.saveSelection = !!value;
    });
    Promise.resolve().then(() => {
      const savedSheetEvent = this.storage.get('sheetId');
      if (savedSheetEvent) {
        this.importSheet(savedSheetEvent);
      } else {
        this.dialog.open(this.sheetPickerDialog, { disableClose: true });
      }
    });
  }

  public importSheet(event: MatSelectChange): void {
    this.showRadar = false;
    this.loader.isLoading.next(true);
    this.setSavedSelection(event);
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

  public setSavedSelection(event: MatSelectChange): void {
    this.fileObject = {
      value: event.value,
      source: {
        triggerValue: event.source.triggerValue
      }
    };
    if (this.saveSelection) {
      this.storage.set('sheetId', this.fileObject);
    }
  }

  public handleSaveSelection(event: MatCheckboxChange): void {
    if (!event.checked) {
      this.storage.clearAll();
    } else {
      this.storage.set('sheetId', this.fileObject);
    }
  }
}
