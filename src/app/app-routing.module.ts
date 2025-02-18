import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { IndexComponent } from './components/index/index.component';
import { CreditsComponent } from './components/credits/credits.component';
import { CguComponent } from './components/cgu/cgu.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
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
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
