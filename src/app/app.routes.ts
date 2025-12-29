import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Tasks } from './tasks/tasks';
import { Profile } from './profile/profile';
import { Calendar } from './calendar/calendar';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'tasks', component: Tasks },
  { path: 'profile', component: Profile },
  { path: 'calendar', component: Calendar }
];
