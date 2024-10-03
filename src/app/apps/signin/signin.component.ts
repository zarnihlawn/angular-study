import {
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIcon,
    MatInputModule,
  ],
})
export class SigninComponent implements OnInit, OnChanges {
  @Input() username: string = 'zarnihlawn';

  private route = inject(Router);

  gotoHome() {
    this.route.navigate(['home'], { replaceUrl: false });
  }

  ngOnInit(): void {
    console.log('Init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const [key, value] of Object.entries(changes)) {
      (this as any)[key] = value.currentValue;
    }
  }
}
