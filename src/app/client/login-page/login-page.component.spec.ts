import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { MaterialModule } from '../../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { GapiAuthService } from '../../core/auth/gapiAuth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MockGapiAuthService {
  signIn = () => {};
  signOut = () => {};
}

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [MaterialModule, RouterTestingModule, BrowserAnimationsModule],
      providers: [{ provide: GapiAuthService, useClass: MockGapiAuthService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
