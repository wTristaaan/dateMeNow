// src/app/services/create-account.service.ts
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ComponentsService } from './components.service';
import { User } from '../models/user';

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
    this.componentsService.setData("codeComponent");
  }

  createPhoneAccount(phoneNumber: string): void {
    // Fake l'envoi du code par SMS
    console.log(`Code envoyé au numéro de téléphone: ${phoneNumber}`);
    this.componentsService.setData("codeComponent");
  }

  checkAccount(): void {
    // Récupère l'utilisateur via une fausse API
    const user = this.getUserFromApi();
    // Connecte l'utilisateur
    this.authService.login(user);
  }

  private getUserFromApi(): User {
    // Simule une requête API pour récupérer les informations de l'utilisateur
    return {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
  }
}
