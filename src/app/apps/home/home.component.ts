import { Component } from '@angular/core';
import { TablePagesComponent } from '../../components/table-pages/table-pages.component';
import { TableFirstLastComponent } from '../../components/table-first-last/table-first-last.component';

import { HomeService } from './home.service';
import { UserType } from './home.type';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [TablePagesComponent, TableFirstLastComponent],
})
export class HomeComponent {
  parentPageList: number[] = new Array(10);

  activePage: number = 1;

  isFirstPage: boolean = true;
  isLastPage: boolean = false;

  usersList: UserType[] = [];

  constructor(private homeService: HomeService) {
    this.homeService.getUserFromServer().then((users) => {
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
