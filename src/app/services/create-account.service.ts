import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CreateAccountService {
  constructor(private authService: AuthService) {}

  createEmailAccount(email: string): void {
    // Fake l'envoi du code par email
    console.log(`Code envoyé à l'adresse email: ${email}`);
    this.authService.login();
  }

  createPhoneAccount(phoneNumber: string): void {
    // Fake l'envoi du code par SMS
    console.log(`Code envoyé au numéro de téléphone: ${phoneNumber}`);
    this.authService.login();
  }
}
