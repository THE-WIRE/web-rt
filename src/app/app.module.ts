import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { JoinComponentClass} from './components/join/join.component';
import { IndexComponentClass} from './components/index/index.component';
import { appRoutes } from './route';

@NgModule({
  declarations: [
    AppComponent,
    JoinComponentClass,
    IndexComponentClass
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
