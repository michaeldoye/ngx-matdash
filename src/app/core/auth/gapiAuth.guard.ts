import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { GapiAuthService } from './gapiAuth.service';

@Injectable({
  providedIn: 'root'
})
export class GapiAuthGuard implements CanActivate {
  constructor(
    private rt: Router,
    private sb: MatSnackBar,
    private gAuth: GapiAuthService
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.gAuth.isSignedIn) {
      this.rt.navigate(['/login']).then(() => {
        this.noAccessNotification();
      });
      return false;
    }
    return true;
  }

  noAccessNotification() {
    this.sb.open('You do not have permission to access this page', '', {
      duration: 7000,
      horizontalPosition: 'left'
    });
  }
}
