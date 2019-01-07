import {Routes} from '@angular/router';
import {DashboardComponent} from './ui/dashboard/dashboard.component';

export const ROUTES: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: '**', redirectTo: '/dashboard' }
]
