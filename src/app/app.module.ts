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

@NgModule({
  declarations: [AppComponent, LoginScreenComponent, LoginFormComponent, SignupScreenComponent, SignupFormComponent],
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
