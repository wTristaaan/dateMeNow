import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AuthService } from '../services/auth.service';
import { IndexComponent } from '../components/index/index.component';
import { GuestGuard } from '../guard/auth.guard';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
