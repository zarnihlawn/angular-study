import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppEnvValues } from '../../../../env/app.env';
import { UserType } from './user-list.type';
// import { AppEnvValues } from 'src/app/env/app.env';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  constructor(private http: HttpClient) {}

  getUserFromServer() {
    return new Promise<UserType[]>((res, rej) => {
      this.http
        .get<UserType[]>(`${AppEnvValues.SERVER_URL}/pse-team/users`)
        .subscribe({
          next: (users) => {
            res(users);
          },
          error: (err) => {
            console.log(err);
            rej(err);
          },
        });
    });
  }
}
