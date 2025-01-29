import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';
import { CreateAccountService } from 'src/app/services/create-account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  standalone: false
})
export class CreateAccountComponent  implements OnInit {
  activeTab: string = 'phone';
  phoneNumber: string = '';
  email: string = '';

  constructor(
    private toastController: ToastController,
    private createAccountService: CreateAccountService
  ) { }

  ngOnInit() {}

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  async onCreateTelAccount() {
    const input = document.querySelector('.inputAccount') as HTMLInputElement;
    const phoneRegex = /^(0|\+33)[67]\d{8}$/;

    if (!phoneRegex.test(this.phoneNumber)) {
      input.style.borderColor = 'red';
      await this.presentToast('bottom', "Votre vérifier votre numéro");
    } else {
      input.style.borderColor = '';
      this.onCreateAccount(this.phoneNumber, "phone")
    }
  }

  async onCreateEmailAccount(){
    const input = document.querySelector('.inputAccount') as HTMLElement;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      input.style.borderColor = 'red';
      await this.presentToast('bottom', "Votre vérifier votre email");
    }else {
      input.style.borderColor = '';
      this.onCreateAccount(this.email, "email")
    }
  }

  onCreateAccount(informations: string, method: string){
    if(method == "phone"){
      this.createAccountService.createPhoneAccount(this.phoneNumber)
    }

    if(method == "email"){
  this.createAccountService.createEmailAccount(this.email)      
    }
  }

}
