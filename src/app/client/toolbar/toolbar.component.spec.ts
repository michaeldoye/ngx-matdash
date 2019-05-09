import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { MaterialModule } from '../../material.module';
import { GapiAuthService } from '../../core/auth/gapiAuth.service';
import { SidenavService } from '../sidenav/sidenav.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MockGapiAuthService {
  isSignedIn = true;
}
class MockSideNavService {
  opened = false;
}

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [MaterialModule, BrowserAnimationsModule],
      providers: [
        { provide: GapiAuthService, useClass: MockGapiAuthService },
        {provide: SidenavService, useClass: MockSideNavService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
