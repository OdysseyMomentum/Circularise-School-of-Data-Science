import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationPageComponent } from './pages/authentication-pages/authentication-page/authentication-page.component';
import { LoginPageComponent } from './pages/authentication-pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/authentication-pages/signup-page/signup-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ScoreItemPageComponent } from './pages/score-item-page/score-item-page.component';
import { ScoresPageComponent } from './pages/scores-page/scores-page.component';
import { ScoreSubItemPageComponent } from './pages/score-sub-item-page/score-sub-item-page.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: '', redirectTo:'/authenticate', pathMatch:'full' },
	{ path: 'authenticate', component: AuthenticationPageComponent },
	{ path: 'login', component: LoginPageComponent },
	{ path: 'signup', component: SignupPageComponent },
	{ path: 'score_item/child_labor', component: ScoreItemPageComponent },
	{ path: 'score_sub_item/check_by_ngo', component: ScoreSubItemPageComponent },
	{ path: 'scores', component: ScoresPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
