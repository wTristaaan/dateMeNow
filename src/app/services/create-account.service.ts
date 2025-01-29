import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ComponentsService } from './components.service';

@Injectable({
  providedIn: 'root',
})
export class CreateAccountService {
  constructor(
    private authService: AuthService,
    private componentsService: ComponentsService
  ) {}

  createEmailAccount(email: string): void {
    // Fake l'envoi du code par email
    console.log(`Code envoyé à l'adresse email: ${email}`);
    this.componentsService.setData("codeComponent")
    //this.authService.login();
  }

  createPhoneAccount(phoneNumber: string): void {
    // Fake l'envoi du code par SMS
    console.log(`Code envoyé au numéro de téléphone: ${phoneNumber}`);
    this.componentsService.setData("codeComponent")
    //this.authService.login();
  }

  checkAccount(){
    // Check account
    this.authService.login();
  }
}
