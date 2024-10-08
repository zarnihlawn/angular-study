import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-table-first-last',
  templateUrl: './table-first-last.component.html',
  styleUrl: './table-first-last.component.scss',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
})
export class TableFirstLastComponent {
  @Output() onFirstPage = new EventEmitter();
  @Output() onLastPage = new EventEmitter();

  constructor(private dialogService: DialogService) {}

  setFristPage(isFirst: boolean) {
    this.onFirstPage.emit(isFirst);
    console.log('First ' + isFirst);
    this.dialogService.openDialog();
  }

  setLastPage(isLast: boolean) {
    this.onLastPage.emit(isLast);
    console.log('Last ' + isLast);
  }
}
