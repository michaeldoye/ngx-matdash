import { Component, OnInit } from '@angular/core';
import { routeAnimation, spinInOut } from '../../route.animation';
import { GapiAuthService } from '../../core/auth/gapiAuth.service';
import { LoadingService } from '../../core/utils/loading.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngxtemplate-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  host: { '[@routeAnimation]': 'true' },
  animations: [routeAnimation, spinInOut]
})
export class LoginPageComponent implements OnInit {

  constructor(
    private gAuth: GapiAuthService,
    private loading: LoadingService,
    private router: Router
  ) {}

  public ngOnInit() {
    this.gAuth.signOut();
  }

  public signIn() {
    this.loading.isLoading.next(true);
    this.gAuth.signIn().then(user => {
      if (user) {
        this.router.navigate(['/']);
        this.loading.isLoading.next(false);
      }
    }).catch(err => {
      console.log(err);
      this.loading.isLoading.next(false);
    });
  }
}
