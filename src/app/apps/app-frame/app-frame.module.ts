import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFrameRoutingModule } from './app-frame-routing.module';
import { AppFrameComponent } from './app-frame.component';
import { RouterModule } from '@angular/router';
import { UserListComponent } from '../public/components/user-list/user-list.component';
import { AppDrawerComponent } from './components/app-drawer/app-drawer.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppFrameComponent],
  imports: [
    RouterModule,
    CommonModule,
    AppFrameRoutingModule,
    AppDrawerComponent,
    MatButtonModule,
  ],
})
export class AppFrameModule {}
