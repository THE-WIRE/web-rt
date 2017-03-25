import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { JoinComponentClass } from './components/join/join.component';
import { IndexComponentClass} from './components/index/index.component';

export const appRoutes:Routes = [
  { path: '', component: IndexComponentClass },
  { path: 'join', component: JoinComponentClass },
  { path: '', redirectTo: '/', pathMatch: 'full' }
]