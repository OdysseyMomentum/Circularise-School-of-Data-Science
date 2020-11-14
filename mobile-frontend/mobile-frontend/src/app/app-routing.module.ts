import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationPageComponent } from './pages/authentication-pages/authentication-page/authentication-page.component';
import { LoginPageComponent } from './pages/authentication-pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/authentication-pages/signup-page/signup-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: '', redirectTo:'/authenticate', pathMatch:'full' },
	{ path: 'authenticate', component: AuthenticationPageComponent },
	{ path: 'login', component: LoginPageComponent },
	{ path: 'signup', component: SignupPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
