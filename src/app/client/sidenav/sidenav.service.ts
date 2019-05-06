import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private sidenav: MatSidenav;

  constructor() {}

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open(): Promise<any> {
    return this.sidenav.open();
  }

  public close(): Promise<any> {
    return this.sidenav.close();
  }

  public toggle(isOpen?: boolean): Promise<any> {
    return this.sidenav.toggle(isOpen);
  }

  public get isOpen(): boolean {
    return this.sidenav.opened;
  }
}
