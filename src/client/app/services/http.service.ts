import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/UserModel';

@Injectable()

export class HttpService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('../api/users');
  }

  addUser(user: User) {
    return this.http.put('../api/user', user);
  }

  getPdf(user: User) {
    return this.http.get('../api/user/' + user.firstName);
  }

}
