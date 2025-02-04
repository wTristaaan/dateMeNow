import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | undefined;

  constructor() { 
    this.user = {
      id: "1",
      name: "Tristan",
      email: "string",
    };
  }

  getUser(): User | undefined {
    return this.user;
  }
}