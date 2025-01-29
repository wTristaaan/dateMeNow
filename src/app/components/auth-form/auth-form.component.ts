import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  standalone: false
})
export class AuthFormComponent  implements OnInit {
  showLoginDiv = false;

  constructor(
    private toastController: ToastController,
    private componentsService: ComponentsService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.showLoginDiv = true;
    }, 1000);
  }

  googleConnexion(){
    this.presentToast('bottom')
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Connexion avec google en cours de développement',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  emailConnexion(){
    this.componentsService.setData("changeComponent")
  }

}
