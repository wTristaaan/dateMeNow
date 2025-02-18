import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AuthService } from '../services/auth.service';
import { IndexComponent } from '../components/index/index.component';
import { GuestGuard } from '../guard/auth.guard';
import { CreditsComponent } from '../components/credits/credits.component';
import { CguComponent } from '../components/cgu/cgu.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [GuestGuard],
    component: HomePage,
  },
  {
    path: 'index',
    canActivate: [AuthService],
    component: IndexComponent,
  },
  {
    path: 'credits',
    canActivate: [AuthService],
    component: CreditsComponent,
  },
  {
    path: 'cgu',
    canActivate: [AuthService],
    component: CguComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
