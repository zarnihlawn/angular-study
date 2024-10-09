import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { AppDrawerService } from './app-drawer.service';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { OnComponentDestroy } from '../../../tools/on-destory.tool';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-app-drawer',
  templateUrl: './app-drawer.component.html',
  styleUrl: './app-drawer.component.scss',
  host: {
    class: 'app-host',
  },
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatButtonModule, PortalModule],
})
export class AppDrawerComponent implements AfterViewInit {
  @ViewChild('drawer') private drawer!: MatDrawer;
  selectedPortal: ComponentPortal<any> | null = null;

  drawerWidth: string = '';

  private onDestory = OnComponentDestroy();

  constructor(private appDrawerService: AppDrawerService) {
    this.appDrawerService
      .portalComponentObservable()
      .pipe(takeUntil(this.onDestory))
      .subscribe({
        next: (component) => {
          setTimeout(() => {
            if (component) {
              this.selectedPortal = new ComponentPortal(component);
            } else {
              this.selectedPortal = null;
            }
          });
        },
      });

    this.appDrawerService
      .drawerWidthObservable()
      .pipe(takeUntil(this.onDestory))
      .subscribe({
        next: (width) => {
          setTimeout(() => {
            this.drawerWidth = width;
          });
        },
      });
  }

  ngAfterViewInit(): void {
    // this.drawer.disableClose = true;

    this.appDrawerService
      .drawerStatusObservable()
      .pipe(takeUntil(this.onDestory))
      .subscribe({
        next: (status) => {
          setTimeout(() => {
            if (status) {
              this.drawer.open();
            } else {
              this.drawer.close();
            }
          });
        },
      });
  }

  openDrawer() {
    this.drawer.open();
  }

  // closeDrawer() {
  //   this.drawer.close();
  // }
}
