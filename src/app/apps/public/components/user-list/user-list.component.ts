import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TableFirstLastComponent } from '../../../../components/table-first-last/table-first-last.component';
import { TablePagesComponent } from '../../../../components/table-pages/table-pages.component';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { debounceTime } from 'rxjs';
import { UserListService } from './user-list.service';
import { UserType } from './user-list.type';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  host: {
    '[class.app-host]': '1',
  },
  standalone: true,
  imports: [
    // Module
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule,
    MatTooltipModule,

    // Components
    TableFirstLastComponent,
    TablePagesComponent,
  ],
})
export class UserListComponent implements AfterViewInit {
  @ViewChild('tablePaginator') tablePaginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Form Control
  filterFormControl = new FormControl();

  parentPageList: number[] = new Array(10);

  activePage: number = 1;

  displayedColumns: string[] = [
    'no',
    'name',
    'age',
    'gender',
    'race',
    'occupation',
    'menu',
  ];
  dataSource = new MatTableDataSource<UserType>();

  isFirstPage: boolean = true;
  isLastPage: boolean = false;

  usersList: UserType[] = [];
  filteredUsersList: UserType[] = [];

  constructor(private userListService: UserListService) {
    this.userListService.getUserFromServer().then((users) => {
      this.usersList = users;
      this.filterUserList('');
      // this.dataSource.data = users;
    });

    // form Control
    this.filterFormControl.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (value) => {
        console.log(value);
        this.filterUserList(value);
      },
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.tablePaginator;
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

  filterUserList(name: string) {
    this.filteredUsersList = [];

    this.filteredUsersList = this.usersList.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase()),
    );

    this.dataSource.data = this.filteredUsersList;
  }
}
