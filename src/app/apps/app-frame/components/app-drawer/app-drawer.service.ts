import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { Component, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Type } from '@angular/core'; // Import Type from @angular/core

@Injectable({
  providedIn: 'root',
})
export class AppDrawerService {
  private drawerStatusSub = new BehaviorSubject<boolean>(false);
  private drawerWidthSub = new BehaviorSubject<string>('fit-content');
  private portalComponentSub = new BehaviorSubject<ComponentType<any> | null>(
    null,
  );

  constructor() {}

  drawerStatusObservable() {
    return this.drawerStatusSub.asObservable();
  }

  openDrawer() {
    this.drawerStatusSub.next(true);
  }

  closeDrawer() {
    this.drawerStatusSub.next(false);
  }
  drawerWidthObservable() {
    return this.drawerWidthSub.asObservable();
  }
  setDrawerWidth(width: string = 'fit-content') {
    this.drawerWidthSub.next(width);
  }

  portalComponentObservable() {
    return this.portalComponentSub.asObservable();
  }
  setPortalComponent(component: ComponentType<any> | null) {
    this.portalComponentSub.next(component);
  }
}
