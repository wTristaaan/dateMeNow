import { AfterViewInit, Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-target-card',
  templateUrl: './target-card.component.html',
  styleUrls: ['./target-card.component.scss'],
  standalone: false
})
export class TargetCardComponent  implements OnInit {
  showFireworks: boolean = false;
  showCard: boolean = true;
  bestActivity: string = "";
  activities: any[] = []

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const cardId = params.get('id');
      const view = params.get('view');
      this.bestActivity = params.get('bestActivity')!;
      const activitiesString = params.get('activities');
      this.activities = JSON.parse(activitiesString!);
  
      if (view === 'false') {
        this.showFireworks = true;
        this.showCard = false;
        setTimeout(() => {
          this.showFireworks = false;
          this.showCard = true
        }, 5000);
      }
    });
  }

  navigateToIndex() {
    this.router.navigate(['/index']);
  }
}
