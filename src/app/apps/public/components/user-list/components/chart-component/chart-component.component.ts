import { AfterViewInit, Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatChipEvent,
  MatChipInputEvent,
  MatChipsModule,
} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeNamesEnum } from '../../../../../../../resources/enums/theme.enum';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrl: './chart-component.component.scss',
  host: {
    class: 'app-host',
  },
  standalone: true,
  imports: [
    MatChipsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
  ],
})
export class ChartComponentComponent implements AfterViewInit {
  chipsList: string[] = ['Apple', 'Orange', 'Banana', 'Watermelon'];
  chipGridItemList: string[] = [];

  chipOptionListFormControl = new FormControl();

  chipGridFormControl = new FormControl();

  themeNamesEnum = ThemeNamesEnum;

  // userNameFormControl = new FormControl('', Validators.required);

  // passwordFormControl = new FormControl('', Validators.required);

  loginFormGroup = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-z]{4,}$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      this.customPasswordValidator,
    ]),
  });

  customPasswordValidator(control: AbstractControl) {
    const value = control.value;
    const regex = /^[a-z]{4,}$/;

    if (!regex.test(value)) {
      return { invalidPassword: true };
    }

    return null;
  }

  constructor() {
    this.chipOptionListFormControl.valueChanges.subscribe({
      next: (values) => {
        console.log(values);
      },
    });
    this.chipGridFormControl.valueChanges.subscribe({
      next: (values) => {
        // this.chipGridItemList.push(values);
        console.log(values);
      },
    });
  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.chipOptionListFormControl.disable();
    //   setTimeout(() => {
    //     this.chipOptionListFormControl.enable();
    //   }, 3000);
    // }, 3000);

    setTimeout(() => {
      this.chipOptionListFormControl.setValue([
        this.chipsList[0],
        this.chipsList[1],
      ]);
    }, 3000);
  }

  removeChip(chipName: string) {
    this.chipsList = this.chipsList.filter((chip) => chip !== chipName);
  }
  removeChipGridItem(item: string) {
    this.chipGridItemList = this.chipGridItemList.filter((c) => c !== item);
  }

  addChipGridItem(event: MatChipInputEvent) {
    console.log(event);
    this.chipGridItemList.push(event.value);
    event.chipInput.clear();
  }

  // changeToDarkMode() {
  //   document.body.setAttribute('mode', 'dark');
  // }

  toggleMode() {
    const mode = document.body.getAttribute('mode');
    if (mode === 'dark') {
      document.body.setAttribute('mode', 'light');
    } else {
      document.body.setAttribute('mode', 'dark');
    }
  }
  changeTheme(theme: ThemeNamesEnum) {
    document.documentElement.setAttribute('theme', theme);
  }
}
