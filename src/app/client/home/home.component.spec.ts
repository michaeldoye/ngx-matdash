import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MaterialModule } from '../../material.module';
import { GapiAuthService } from '../../core/auth/gapiAuth.service';
import { GapiFilesService } from '../../core/utils/gapiFiles.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MockGapiAuthService {
  files = [];
}

class MockGoogleApi {
  getDriveFiles = () => {};
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, BrowserAnimationsModule ],
      declarations: [ HomeComponent, DashboardComponent ],
      providers: [
        { provide: GapiAuthService, useClass: MockGapiAuthService },
        { provide: GapiFilesService, useClass: MockGoogleApi }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
