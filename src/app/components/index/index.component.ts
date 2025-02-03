import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DateService } from 'src/app/services/dates.service';
import { NoDatesComponent } from '../no-dates/no-dates.component';
import { DatesListComponent } from '../dates-list/dates-list.component';
import { ToastController } from '@ionic/angular';
import { HeartComponent } from '../heart/heart.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  standalone: false
})
export class IndexComponent  implements OnInit {
  dates: any[] = [];
  hasDates: boolean = false;
  dynamicComponent: any;
  activePage: string = 'home'

  constructor(
    private authService: AuthService,
    private dateService: DateService,
    private toastController: ToastController
  ) {}

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.dateService.getDates().subscribe(
      (data) => {
        this.dates = data;
        this.hasDates = this.dates.length > 0;
        if(this.hasDates)
        {
          this.dateService.sendDates(this.dates)
          this.dynamicComponent = DatesListComponent
        }else{
          this.dynamicComponent = NoDatesComponent
        }

      },
      (error) => {
        console.error('Error fetching dates', error);
        this.hasDates = false;
      }
    );

    this.dateService.clickOnDate$.subscribe(click => {
      if(click)
        this.presentToast('bottom', "Votre date n'a pas encore répondu.");
    })
  }

  setActivePage(tab: string) {
    this.activePage = tab;
    if(tab == "home")
    {
      if(this.hasDates)
        {
          this.dateService.sendDates(this.dates)
          this.dynamicComponent = DatesListComponent
        }else{
          this.dynamicComponent = NoDatesComponent
        }
    }

    if(tab == "heart")  
      this.dynamicComponent = HeartComponent

      
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}
