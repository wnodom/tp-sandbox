import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () => import('./video-dashboard/video-dashboard'),
  },
  {
    path: 'dashboard/:id',
    loadComponent: () => import('./video-dashboard/video-dashboard'),
  },
  { path: '**', redirectTo: 'dashboard' },
];
