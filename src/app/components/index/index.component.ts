import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DateService } from 'src/app/services/dates.service';
import { NoDatesComponent } from '../no-dates/no-dates.component';
import { DatesListComponent } from '../dates-list/dates-list.component';

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
    private dateService: DateService
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
  }

  setActivePage(tab: string) {
    this.activePage = tab;
  }

}
