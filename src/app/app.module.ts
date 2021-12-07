import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginScreenComponent } from './Templates/login/login-screen.component';
import { LoginFormComponent } from './Molecules/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { SignupScreenComponent } from './Templates/signup-screen/signup-screen.component';
import { SignupFormComponent } from './Molecules/signup-form/signup-form.component';
import { HomeScreenComponent } from './Templates/home-screen/home-screen.component';
import { HeaderComponent } from './Molecules/header/header.component';
import { PostComponent } from './Molecules/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    LoginFormComponent,
    SignupScreenComponent,
    SignupFormComponent,
    HomeScreenComponent,
    HeaderComponent,
    PostComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
