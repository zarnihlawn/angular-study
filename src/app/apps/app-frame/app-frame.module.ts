import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFrameRoutingModule } from './app-frame-routing.module';
import { AppFrameComponent } from './app-frame.component';
import { RouterModule } from '@angular/router';
import { UserListComponent } from '../public/components/user-list/user-list.component';

@NgModule({
  declarations: [AppFrameComponent],
  imports: [RouterModule, CommonModule, AppFrameRoutingModule],
})
export class AppFrameModule {}
