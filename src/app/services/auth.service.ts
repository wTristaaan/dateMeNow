import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private router: Router) {}

  checkLoginStatus(): boolean {
    const token = localStorage.getItem('auth-token');
    const isLoggedIn = !!token;
    this.isLoggedInSubject.next(isLoggedIn);
    return isLoggedIn;
  }

  login(): void {
    localStorage.setItem('auth-token', 'fake-token');
    this.isLoggedInSubject.next(true);
    this.router.navigate(['/index']);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']);
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