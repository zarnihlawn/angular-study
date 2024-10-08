import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-table-pages',
  templateUrl: './table-pages.component.html',
  styleUrl: './table-pages.component.scss',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule],
})
export class TablePagesComponent {
  @Input() activePage: number = 1;
  @Input() pageList: number[] = new Array(7);

  @Output() onPageChanged = new EventEmitter();

  constructor() {}

  selectPage(pageIndex: number) {
    this.activePage = pageIndex;
    this.onPageChanged.emit(pageIndex + 1);
  }
}
