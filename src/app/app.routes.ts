import {Routes} from '@angular/router';
import {DashboardComponent} from './ui/dashboard/dashboard.component';
import {UsersComponent} from './ui/users/users.component';

export const ROUTES: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'users', component: UsersComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: '**', redirectTo: '/dashboard' }
]
