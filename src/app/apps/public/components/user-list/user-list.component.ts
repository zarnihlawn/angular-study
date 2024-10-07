import { Component } from '@angular/core';
import { TablePagesComponent } from '../../../../components/table-pages/table-pages.component';
import { TableFirstLastComponent } from '../../../../components/table-first-last/table-first-last.component';

import { UserListService } from './user-list.service';
import { UserType } from './user-list.type';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  host: {
    '[class.app-host]': '1',
  },
  standalone: true,
  imports: [TablePagesComponent, TableFirstLastComponent],
})
export class UserListComponent {
  parentPageList: number[] = new Array(10);

  activePage: number = 1;

  isFirstPage: boolean = true;
  isLastPage: boolean = false;

  usersList: UserType[] = [];

  constructor(private userListService: UserListService) {
    this.userListService.getUserFromServer().then((users) => {
      this.usersList = users;
    });
  }

  pageChanged(pageNo: number) {
    this.activePage = pageNo;
    this.updatePageBools();
  }

  updatePageBools() {
    if (this.activePage === 1) {
      this.isFirstPage = true;
      this.isLastPage = false;
    } else if (this.activePage === this.parentPageList.length) {
      this.isFirstPage = false;
      this.isLastPage = true;
    } else {
      this.isFirstPage = false;
      this.isLastPage = false;
    }
  }

  firstPageChanged(isFirst: boolean) {
    if (isFirst) {
      this.activePage = 1;
      this.updatePageBools();
    }
  }

  lastPageChanged(isLast: boolean) {
    if (isLast) {
      this.activePage = this.parentPageList.length;
      this.updatePageBools();
    }
  }
}
