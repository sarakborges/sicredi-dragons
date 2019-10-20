import { Injectable } from '@angular/core';

import { User } from '@models/user.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  getUser(username, password): Observable<any> {
    if (username === 'user' && password === 'qwerty123') {
      return of({
        id: 1,
        username: 'user',
        password: 'qwerty123',
        token: 'token'
      });
    } else {
      return of(false);
    }
  }
}
