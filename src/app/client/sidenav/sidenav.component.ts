import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './sidenav.service';
import { StorageService } from '../../core/utils/storage.service';
import { fadeInOut } from '../../route.animation';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngxtemplate-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [fadeInOut]
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  public savedSheet: any;

  constructor(public sv: SidenavService, private storage: StorageService) {}

  public ngOnInit(): void {
    this.sv.setSidenav(this.sidenav);
    this.storage.storageValue$.subscribe((value: any) => {
      this.savedSheet = value;
    });
  }

  clearSavedRadar() {
    this.storage.clearAll();
    this.savedSheet = null;
  }
}
