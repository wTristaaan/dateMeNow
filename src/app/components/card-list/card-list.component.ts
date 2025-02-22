import { Component, OnInit, Input } from '@angular/core';
import { DateService } from 'src/app/services/dates.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  standalone: false,
})
export class CardListComponent  implements OnInit {
  @Input() isLocked: boolean = false;
  @Input() img: string = "";
  @Input() dateWith: string = "";
  @Input() cardId: string = "";
  @Input() view: boolean = false;
  @Input() bestActivity: string = "";
  @Input() activities: any[] = [];

  constructor(
    private dateService: DateService,
    private router: Router
  ) { }

  ngOnInit() {}

  async onCard(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    if (target.classList.contains('locked')) {
      this.dateService.sendClickOnDate(true);
    } else if (target.classList.contains('unlocked')) {
      const activitiesString = JSON.stringify(this.activities);
      this.router.navigate(['/target-component', this.cardId, this.view, this.bestActivity, activitiesString]);
    }
  }

}
