import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';
import { GapiAuthService } from './gapiAuth.service';

@Injectable({
  providedIn: 'root'
})
export class GapiAuthGuard implements CanActivate {
  constructor(
    private rt: Router,
    private sb: MatSnackBar,
    public auth: AngularFireAuth,
    private gAuth: GapiAuthService
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.gAuth.isSignedIn) {
      this.rt.navigate(['/login']);
      this.noAccessNotificaton();
      return false;
    }
    return true;
  }

  noAccessNotificaton() {
    this.sb.open('Error; You do not have permission to access this page', '', {
      duration: 7000,
      horizontalPosition: 'left'
    });
  }
}
