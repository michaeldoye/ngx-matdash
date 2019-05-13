import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './client/toolbar/toolbar.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { MaterialModule } from './material.module';
import { SidenavComponent } from './client/sidenav/sidenav.component';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToolbarComponent,
        DashboardComponent,
        SidenavComponent,
        RouterOutlet
      ],
      imports: [
        MaterialModule,
        ServiceWorkerModule.register('', { enabled: false }),
        BrowserAnimationsModule
      ],
      providers: [ ChildrenOutletContexts ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'tech radar'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('tech radar');
  }));
});
