import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { AuthFormComponent } from '../components/auth-form/auth-form.component';
import { CreateAccountComponent } from '../components/create-account/create-account.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    HomePageRoutingModule,
  ],
  declarations: [HomePage, AuthFormComponent, CreateAccountComponent]
})
export class HomePageModule {}
