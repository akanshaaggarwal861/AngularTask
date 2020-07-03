import { NgModule, Host } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path : '',
    redirectTo: '/LoginPage',
    pathMatch: 'full'
  },
  {
    path: 'LoginPage',
    component: LoginPageComponent
  },
  {
    path : 'home',
    component: HomeComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
