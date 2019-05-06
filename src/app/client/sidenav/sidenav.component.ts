import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './sidenav.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngxtemplate-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(public sv: SidenavService) {}

  public ngOnInit(): void {
    this.sv.setSidenav(this.sidenav);
  }
}
