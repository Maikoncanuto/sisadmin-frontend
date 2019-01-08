import {Routes} from '@angular/router';
import {DashboardComponent} from './ui/dashboard/dashboard.component';
import {UsersComponent} from './ui/users/users.component';
import {AuthGuard} from './auth/auth.guard';
import {LoginComponent} from './ui/login/login.component';

export const ROUTES: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: '**', redirectTo: '/login' }
]
