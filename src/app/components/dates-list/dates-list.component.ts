import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/services/dates.service';

@Component({
  selector: 'app-dates-list',
  templateUrl: './dates-list.component.html',
  styleUrls: ['./dates-list.component.scss'],
  standalone: false
})
export class DatesListComponent  implements OnInit {
  dates: any[] = []

  constructor(private dateService: DateService) { }

  ngOnInit() {
    this.dateService.sendDateList$.subscribe((dates: any[]) => {
      this.dates = dates;
    })
  }

}
