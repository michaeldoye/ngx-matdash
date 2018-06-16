import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthGuard } from './core/auth/admin-auth.guard';
import { HomeComponent } from './client/pages/home/home.component';
import { LoginPageComponent } from './client/pages/login-page/login-page.component';


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
