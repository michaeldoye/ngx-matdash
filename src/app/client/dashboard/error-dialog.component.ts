import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-picker-dialog',
  template: `
    <div fxLayout="column" fxLayoutAlign="center center">
      <mat-icon class="error-icon" color="warn">error</mat-icon>
      <h3>There was an error, please try again</h3>
    </div>
    <mat-dialog-content>
      <div style="text-align: center;">
        <small>It is likely that there is a problem with the spreadsheet data. Please
          check the spreadsheet and try again. Or choose a new sheet</small>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions
      fxLayout="row"
      fxLayoutAlign="center center"
      fxLayoutGap="5px"
    >
      <a mat-flat-button color="primary" href="/">Reload</a>
    </mat-dialog-actions>
  `
})
export class ErrorDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
