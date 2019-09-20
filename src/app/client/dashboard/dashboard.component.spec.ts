
import { fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GapiAuthService } from '../../core/auth/gapiAuth.service';
import { GapiFilesService } from '../../core/utils/gapiFiles.service';

class MockGapiAuthService {
  files = [];
}

class MockGoogleApi {
  getDriveFiles = () => {};
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [ MaterialModule, BrowserAnimationsModule ],
      providers: [
        { provide: GapiAuthService, useClass: MockGapiAuthService },
        { provide: GapiFilesService, useClass: MockGoogleApi }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', fakeAsync(() => {
    tick(1000);
    expect(component).toBeTruthy();
  }));
});
