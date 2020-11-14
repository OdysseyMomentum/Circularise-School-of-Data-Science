import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationPageComponent } from './pages/authentication-pages/authentication-page/authentication-page.component';
import { LoginPageComponent } from './pages/authentication-pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/authentication-pages/signup-page/signup-page.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    HeaderComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
