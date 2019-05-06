import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientModule } from './client/client.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { GapiAuthService } from './core/auth/gapiAuth.service';

export function initGapi(gapiSession: GapiAuthService) {
  return () => gapiSession.initClient(environment.gapi);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    CoreModule,
    ClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initGapi,
      deps: [GapiAuthService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
