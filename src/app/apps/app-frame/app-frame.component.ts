import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { AppDrawerService } from './components/app-drawer/app-drawer.service';

@Component({
  selector: 'app-app-frame',
  templateUrl: './app-frame.component.html',
  styleUrl: './app-frame.component.scss',
  host: {
    '[class.app-host]': '1',
  },
})
export class AppFrameComponent {
  constructor(private appDrawerService: AppDrawerService) {}

  openDrawer() {
    this.appDrawerService.openDrawer();
  }
}
