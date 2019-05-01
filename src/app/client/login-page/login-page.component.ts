import { Component, OnInit } from '@angular/core';
import { routeAnimation, spinInOut } from '../../route.animation';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'ngxtemplate-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  host: {'[@routeAnimation]': 'true'},
  animations: [routeAnimation, spinInOut]
})
export class LoginPageComponent implements OnInit {

  public hide = true;
  public email = '';
  public password = '';
  public rememberMe =  true;

  constructor(public auth: AuthService) { }

  public ngOnInit() {
    this.auth.signOut();
  }

}
