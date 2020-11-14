import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationPageComponent } from './pages/authentication-pages/authentication-page/authentication-page.component';

const routes: Routes = [
	// { path: 'home', component: HomePageComponent },
	{ path: 'authenticate', component: AuthenticationPageComponent },
	{ path: '', redirectTo:'/authenticate', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
