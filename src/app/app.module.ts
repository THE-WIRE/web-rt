import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { JoinComponentClass} from './components/join/join.component';
import { IndexComponentClass} from './components/index/index.component';
import { CreateComponentClass} from './components/create/create.component';
import { appRoutes } from './route';




export const firebaseConfig = {
    apiKey: "AIzaSyAXJ5PRbI0cPJHh6BS-1pjvaRmRs5ibJYM",
    authDomain: "rt-code-collab.firebaseapp.com",
    databaseURL: "https://rt-code-collab.firebaseio.com",
    storageBucket: "rt-code-collab.appspot.com",
    messagingSenderId: "89041205883"
  };

@NgModule({
  declarations: [
    AppComponent,
    JoinComponentClass,
    IndexComponentClass,
    CreateComponentClass
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
