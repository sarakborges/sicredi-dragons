import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@models/user.model';
import { of, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(username, password): Observable<User> {
    if (username === 'user' && password === 'qwerty123') {
      return of({
        id: 1,
        username: 'user',
        password: 'qwerty123',
        token: 'token'
      });
    }
  }
}
