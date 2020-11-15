import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationPageComponent } from './pages/authentication-pages/authentication-page/authentication-page.component';
import { LoginPageComponent } from './pages/authentication-pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/authentication-pages/signup-page/signup-page.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
// import { MatFormFieldModule } from '@angular/material/form-field';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './pages/home/home.component';
import { ScorePageComponent } from './pages/score-page/score-page.component';
import { ScoreItemPageComponent } from './pages/score-item-page/score-item-page.component';
import { ScoresPageComponent } from './pages/scores-page/scores-page.component';
import { ScoreSubItemPageComponent } from './pages/score-sub-item-page/score-sub-item-page.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { ActiveEventComponent } from './pages/active-event/active-event.component';
import { EventSummaryPageComponent } from './pages/event-summary-page/event-summary-page.component';
import { PastEventsPageComponent } from './pages/past-events-page/past-events-page.component';
import { SellPageComponent } from './pages/sell-page/sell-page.component';
// import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    HeaderComponent,
    HomeComponent,
    ScorePageComponent,
    ScoreItemPageComponent,
    ScoresPageComponent,
    ScoreSubItemPageComponent,
    CreateEventComponent,
    ActiveEventComponent,
    EventSummaryPageComponent,
    PastEventsPageComponent,
    SellPageComponent
  ],
  imports: [
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule,
    // MatGridListModule
  ],
  exports:[MatInputModule, MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
