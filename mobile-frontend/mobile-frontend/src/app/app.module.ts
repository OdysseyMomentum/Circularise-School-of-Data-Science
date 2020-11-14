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
// import { MatFormFieldModule } from '@angular/material/form-field';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './pages/home/home.component';
// import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    HeaderComponent,
    HomeComponent
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
    // MatGridListModule
  ],
  exports:[MatInputModule, MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
