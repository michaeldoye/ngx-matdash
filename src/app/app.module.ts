import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AngularFireModule } from 'angularfire2';
import { firebaseEnvironment, environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CoreModule } from '@core/core.module';
import { ClientModule } from './client/client.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    MaterialModule,
    CoreModule,
    ClientModule,
    AngularFireModule.initializeApp(firebaseEnvironment.firebase),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
