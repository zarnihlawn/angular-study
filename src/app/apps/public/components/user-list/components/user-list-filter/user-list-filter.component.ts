import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import {
  MatDatepickerModule,
  MatStartDate,
} from '@angular/material/datepicker';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list-filter',
  templateUrl: './user-list-filter.component.html',
  styleUrl: './user-list-filter.component.scss',
  host: {
    class: 'app-host',
  },
  standalone: true,
  imports: [
    //Pipe
    DatePipe,

    // Module
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStartDate,
  ],
})
export class UserListFilterComponent {
  selectOptionFormControl = new FormControl();

  selectOptionsList: string[] = ['Apple', 'Orange', 'Banana', 'Watermelon'];

  selectMultipleOptionFormControl = new FormControl();

  selectedOptions: string[] = [];

  dateFormControl = new FormControl();
  pickedDate: string = '';

  dateRangeFormGroup = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(
    private router: Router,
    private datePipe: DatePipe,
  ) {
    this.selectOptionFormControl.valueChanges.subscribe({
      next: (value) => {
        console.log(value);
      },
    });
    this.selectMultipleOptionFormControl.valueChanges.subscribe({
      next: (values) => {
        this.selectedOptions = values;
        console.log(values);
      },
    });

    this.dateFormControl.valueChanges.subscribe({
      next: (date) => {
        if (date) {
          const dateString = this.datePipe.transform(
            date,
            'MMM dd, yyyy HH:mm:ss a',
          );
          console.log(dateString);
          this.pickedDate = date;
        }
      },
    });

    this.dateRangeFormGroup.valueChanges.subscribe({
      next: (dateRange) => {
        console.log(dateRange);
      },
    });

    // this.dateRangeFormGroup.get('start')?.valueChanges.subscribe({
    //   next: (startDate) => {
    //     console.log(startDate);
    //   },
    // });

    // this.dateRangeFormGroup.get('end')?.valueChanges.subscribe({
    //   next: (endDate) => {
    //     console.log(endDate);
    //   },
    // });
  }

  countOtherOptions() {
    const count = this.selectedOptions.length;
    if (count > 1) {
      if (count == 2) {
        return '(+1 other)';
      } else {
        return `(+${count - 1} others)`;
      }
    } else {
      return '';
    }
  }
}
