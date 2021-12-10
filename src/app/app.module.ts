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
import { ThreadComponent } from './Molecules/thread/thread.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideStorage, getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    LoginFormComponent,
    SignupScreenComponent,
    SignupFormComponent,
    HomeScreenComponent,
    HeaderComponent,
    PostComponent,
    ThreadComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
  ],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
