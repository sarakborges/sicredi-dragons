import { Injectable } from '@angular/core';

import { User } from '@models/user.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  getUser(username, password) {
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
