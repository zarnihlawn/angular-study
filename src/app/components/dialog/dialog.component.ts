import { DIALOG_DATA } from '@angular/cdk/dialog';
import { AfterViewInit, Component, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  standalone: true,
  imports: [MatDialogModule],
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) private dialogData: any) {
    setTimeout(() => {
      console.log(this.dialogData);
    });
  }
}
