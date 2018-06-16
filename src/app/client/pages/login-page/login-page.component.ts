import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { routeAnimation, spinInOut } from '@core/utils/route.animation';

@Component({
  selector: 'ngxtemplate-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  host: {'[@routeAnimation]': 'true'},
  animations: [routeAnimation, spinInOut]
})
export class LoginPageComponent implements OnInit {

  public hide: boolean = true;
  public email: string = '';
  public password: string = '';
  public rememberMe: boolean =  true;

  constructor(public auth: AuthService) { }

  public ngOnInit() {
    this.auth.signOut();
  }

}
