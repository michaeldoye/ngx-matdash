import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';
import { MaterialModule } from '../../material.module';
import { RoutingModule } from '../../app.routing.module';
import { HomeComponent } from '../home/home.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SidenavComponent,
        HomeComponent,
        LoginPageComponent,
        DashboardComponent
      ],
      imports: [MaterialModule, RoutingModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
