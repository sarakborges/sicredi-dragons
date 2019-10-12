import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "@models/user.model";
import { environment as config } from "@environment";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`${config.uri}/users`);
  }

  getUser(username, password) {
    return this.http.post<any>(`${config.uri}/users`, {
      username,
      password
    });
  }

  register(user: User) {
    return this.http.post(`${config.uri}/users`, user);
  }

  delete(id: number) {
    return this.http.delete(`${config.uri}/users/${id}`);
  }
}
