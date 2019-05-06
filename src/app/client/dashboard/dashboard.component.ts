import { Component, TemplateRef, ViewChild } from '@angular/core';
import { flyInOut } from '../../route.animation';
import { GapiAuthService } from '../../core/auth/gapiAuth.service';
import { LoadingService } from '../../core/utils/loading.service';
import { MatDialog, MatSelectChange } from '@angular/material';
import {
  QUADRANTS,
  RadarConfig,
  radarConfig,
  RadarEntries,
  RINGS
} from '../../core/config/radar.config';

declare function radar_visualization(config: RadarConfig): void;

const MIME_TYPE = 'application/vnd.google-apps.spreadsheet';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngxtemplate-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [flyInOut]
})
export class DashboardComponent {
  public files: any[] = [];
  public selectedFileId: string;
  public showRadar: boolean;
  @ViewChild('sheetPickerDialog') sheetPickerDialog: TemplateRef<any>;
  @ViewChild('errorDialog') errorDialog: TemplateRef<any>;

  constructor(
    private gAuth: GapiAuthService,
    private loader: LoadingService,
    public dialog: MatDialog
  ) {
    this.getFiles();
  }

  public async getFiles(): Promise<void> {
    this.loader.isLoading.next(true);
    const files = await this.gAuth.getFiles();
    this.files = files.result.files.filter(
      file =>
        file.mimeType === MIME_TYPE &&
        file.name.toLowerCase().indexOf('radar') > -1
    );
    this.dialog.open(this.sheetPickerDialog, { disableClose: true });
    this.loader.isLoading.next(false);
  }

  public async importSheet(event: MatSelectChange): Promise<void> {
    this.showRadar = false;
    this.loader.isLoading.next(true);
    const spreadSheet = await this.gAuth.getFile(event.value, 'A2:E');
    Object.assign(radarConfig, {
      entries: this.mapRadarEntries(spreadSheet.result.values),
      title: event.source.triggerValue
    });
    this.showRadar = true;
    setTimeout(() => radar_visualization(radarConfig), 0);
    this.loader.isLoading.next(false);
    this.dialog.closeAll();
  }

  private mapRadarEntries(values: any[]): RadarEntries[] {
    const radarEntries = values.map(value => {
      return {
        label: value[0],
        quadrant: this.getIndexForValues(value, 'quadrant'),
        ring: this.getIndexForValues(value, 'ring'),
        moved: 0
      };
    });
    return radarEntries.length ? radarEntries : [];
  }

  private getIndexForValues(value: string, type: string): number | null {
    const filtered =
      type === 'quadrant'
        ? QUADRANTS.find(q => q.name === value[2])
        : RINGS.find(r => r.name === value[1]);
    try {
      return filtered.index;
    } catch (error) {
      this.dialog.open(this.errorDialog, {
        disableClose: true,
        width: '400px'
      });
      this.loader.isLoading.next(false);
      throw new Error(`There was an error: ${error.message}`);
    }
  }
}
