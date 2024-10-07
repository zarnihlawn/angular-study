import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signin',
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./apps/signin/signin.component').then((c) => c.SigninComponent),
  },

  {
    path: 'app',
    loadChildren: () =>
      import('./apps/app-frame/app-frame.module').then((m) => m.AppFrameModule),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then(
        (c) => c.NotFoundComponent,
      ),
  },
];
