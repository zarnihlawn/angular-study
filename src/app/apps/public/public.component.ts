import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
  host: {
    '[class.app-host]': '1',
  },
})
export class PublicComponent {
  private user: any = null;

  constructor(private router: Router) {}
}
