import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { AuthFormComponent } from '../components/auth-form/auth-form.component';
import { CreateAccountComponent } from '../components/create-account/create-account.component';
import { IndexComponent } from '../components/index/index.component';
import { DatesListComponent } from '../components/dates-list/dates-list.component';
import { CardListComponent } from '../components/card-list/card-list.component';
import { HeartComponent } from '../components/heart/heart.component';
import { SwipeableCardComponent } from '../components/swipeable-card/swipeable-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage, 
    AuthFormComponent, 
    CreateAccountComponent,
    IndexComponent,
    DatesListComponent,
    CardListComponent,
    HeartComponent,
    SwipeableCardComponent,
  ]
})
export class HomePageModule {}
