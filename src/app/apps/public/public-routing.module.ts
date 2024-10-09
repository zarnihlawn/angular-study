import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'user-list',
      },
      {
        path: 'user-list',
        loadComponent: () =>
          import('./components/user-list/user-list.component').then(
            (c) => c.UserListComponent,
          ),
      },
      // {
      //   path: 'drawer',
      //   loadComponent: () =>
      //     import(
      //       '../app-frame/components/app-drawer/app-drawer.component'
      //     ).then((c) => c.AppDrawerComponent),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
