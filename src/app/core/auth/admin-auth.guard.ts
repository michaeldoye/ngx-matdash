import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from "@angular/material";
import { AngularFireAuth } from 'angularfire2/auth';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(
    private rt: Router,
    private sb: MatSnackBar,
    public auth: AngularFireAuth
  ) {}
  
  canActivate(): Observable<boolean> | Promise<boolean> | boolean { 
    return this.auth.authState.pipe(
      map((auth) => {
        if (!auth) {
          this.rt.navigate(['/login']);
          this.noAccessNotificaton();
          return false;            
        }
        return true;
      }),
      take(1)
    )
  }

  noAccessNotificaton() {
    this.sb.open(
      'Error; You do not have permission to access this page', 
      '', 
      {duration: 7000, horizontalPosition: 'left'}
    )   
  }

}