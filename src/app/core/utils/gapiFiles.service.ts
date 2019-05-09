import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GapiAuthService } from '../auth/gapiAuth.service';
import { LoadingService } from './loading.service';
import { MatDialog, MatSelectChange } from '@angular/material';
import { fromPromise } from 'rxjs/internal-compatibility';
import { map, pluck } from 'rxjs/operators';
import {
  QUADRANTS,
  radarConfig,
  RadarEntries,
  RINGS
} from '../config/radar.config';
import { ErrorDialogComponent } from '../../client/dashboard/error-dialog.component';

const MIME_TYPE = 'application/vnd.google-apps.spreadsheet';

@Injectable({
  providedIn: 'root'
})
export class GapiFilesService {
  constructor(
    private googleApi: GapiAuthService,
    private loader: LoadingService,
    public dialog: MatDialog
  ) {}

  public getDriveFiles(): Observable<any> {
    return fromPromise(this.googleApi.getFiles()).pipe(
      pluck('result', 'files'),
      map(data => {
        return data.filter(
          file =>
            file.mimeType === MIME_TYPE &&
            file.name.toLowerCase().indexOf('radar') > -1
        );
      })
    );
  }

  public getDriveFileContents(event: MatSelectChange): Observable<any> {
    return fromPromise(this.googleApi.getFile(event.value, 'A2:E')).pipe(
      pluck('result', 'values'),
      map(data => {
        return Object.assign(radarConfig, {
          entries: this.mapRadarEntries(data),
          title: event.source.triggerValue
        });
      })
    );
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

  private getIndexForValues(value: string, type: string): number {
    const filtered =
      type === 'quadrant'
        ? QUADRANTS.find(q => q.name === value[2])
        : RINGS.find(r => r.name === value[1]);
    try {
      return filtered.index;
    } catch (error) {
      this.dialog.open(ErrorDialogComponent, {
        disableClose: true,
        width: '400px',
        data: { error: error.message }
      });
      this.loader.isLoading.next(false);
      throw new Error(`There was an error: ${error.message}`);
    }
  }
}
