import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Tasks } from './tasks/tasks';
import { Profile } from './profile/profile';
import { Calendar } from './calendar/calendar';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { MainLayoutComponent } from './layout/main-layout/main-layout';

export const routes: Routes = [

  { path: 'login', component: Login },
  { path: 'signup', component: Signup },

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: Home },
      { path: 'tasks', component: Tasks },
      { path: 'profile', component: Profile },
      { path: 'calendar', component: Calendar },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
];
