import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrl: './private.component.scss',
})
export class PrivateComponent {
  private user: any = null;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    this.authService.checkUserInServer().then((u) => {
      if (u) {
        this.user = u;
      } else {
        this.router.navigate(['/signin'], { replaceUrl: true });
      }
    });
  }
}
