import { Routes } from '@angular/router';
import { VideoDashboard } from './video-dashboard/video-dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: VideoDashboard },
  { path: '**', redirectTo: 'dashboard' },
];
