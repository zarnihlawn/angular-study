import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    // Modules
    RouterOutlet,
  ],
})
export class AppComponent {
  title = 'angular-study';
}
