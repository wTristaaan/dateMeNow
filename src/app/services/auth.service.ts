import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private router: Router) {}

  checkLoginStatus(): boolean {
    const token = localStorage.getItem('auth-token');
    const isLoggedIn = !!token;
    this.isLoggedInSubject.next(isLoggedIn);
    return isLoggedIn;
  }

  login(user: User): void {
    localStorage.setItem('auth-token', 'fake-token');
    this.isLoggedInSubject.next(true);
    this.userSubject.next(user);
    this.router.navigate(['/index']);
  }

  logout(): void {
    localStorage.removeItem('auth-token');
    this.isLoggedInSubject.next(false);
    this.userSubject.next(null);
    this.router.navigate(['/']);
  }

  canActivate(): boolean {
    const isLoggedIn = this.checkLoginStatus();
    if (!isLoggedIn) {
      this.router.navigate(['/home']);
      return isLoggedIn;
    }
    return isLoggedIn;
  }
}