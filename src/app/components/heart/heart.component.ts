import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/services/dates.service';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.scss'],
  standalone: false
})
export class HeartComponent  implements OnInit {
  cards: any[] = [];

  constructor(private dateService: DateService) {}

  ngOnInit() {
    this.dateService.getDateIdea().subscribe(dateIdea => {
      this.cards = dateIdea;
    })
  }

  logChoice(choice: any) {
    console.log(choice)
  };
}
