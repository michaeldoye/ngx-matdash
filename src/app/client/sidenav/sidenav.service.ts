import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: "root"
})
export class SidenavService {
  private sidenav: MatSidenav;
  public isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  
  constructor(private breakpointObserver: BreakpointObserver) {}

  /**
   * Setter for sidenav.
   *
   * @param {MdSidenav} sidenav
   */
  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  /**
   * Open this sidenav, and return a Promise that will 
   * resolve when it's fully opened (or get rejected if it didn't).
   *
   * @returns Promise<MdSidenavToggleResult>
   */
  public open(): Promise<any> {
    return this.sidenav.open();
  }

  /**
   * Close this sidenav, and return a Promise that 
   * will resolve when it's fully closed (or get rejected if it didn't).
   *
   * @returns Promise<MdSidenavToggleResult>
   */
  public close(): Promise<any> {
    return this.sidenav.close();
  }

  /**
   * Toggle this sidenav. This is equivalent to calling open() 
   * when it's already opened, or close() when it's closed.
   *
   * @param {boolean} isOpen  Whether the sidenav should be open.
   *
   * @returns {Promise<any>}
   */
  public toggle(isOpen?: boolean): Promise<any> {
    return this.sidenav.toggle(isOpen);
  }

  public get isOpen(): boolean {
    return this.sidenav.opened;
  }
}