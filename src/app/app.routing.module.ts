import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './client/home/home.component';
import { LoginPageComponent } from './client/login-page/login-page.component';
import { AdminAuthGuard } from './core/auth/admin-auth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
