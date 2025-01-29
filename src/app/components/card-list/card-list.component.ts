import { Component, OnInit, Input } from '@angular/core';
import { DateService } from 'src/app/services/dates.service';

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

  constructor(private dateService: DateService) { }

  ngOnInit() {}

  async onCard(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    if (target.classList.contains('locked')) {
      this.dateService.sendClickOnDate(true)
    } else if (target.classList.contains('unlocked')) {
      console.log('Carte déverrouillée');
      // Ajoute ici la logique pour la carte déverrouillée
    }
  }

}
