import {
  Component,
  Input,
  ViewChildren,
  QueryList,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
  OnInit
} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-swipeable-card',
  templateUrl: './swipeable-card.component.html',
  styleUrls: ['./swipeable-card.component.scss'],
  standalone: false
})
export class SwipeableCardComponent  implements OnInit {

  @Input('cards') cards: Array<{
    img: string;
    title: string;
    description: string;
    fullDescription: string;
  }> | undefined;

  @ViewChildren('appCard') appCards: QueryList<ElementRef> | undefined;
  appCardsArray: Array<ElementRef> | undefined;

  @Output() choiceMade = new EventEmitter();

  moveOutWidth: number | undefined;
  shiftRequired: boolean | undefined;
  transitionInProgress: boolean | undefined;
  heartVisible: boolean | undefined;
  crossVisible: boolean | undefined;

  constructor(private renderer: Renderer2, private modalCtrl: ModalController) {}

  ngOnInit(): void {
    
  }

/*   userClickedButton(event: any, heart: any) {
    event.preventDefault();
    if (!this.cards!.length) return false;
    if (heart) {
      this.renderer.setStyle(
        this.appCardsArray![0].nativeElement,
        'transform',
        'translate(' + this.moveOutWidth + 'px, -100px) rotate(-30deg)'
      );
      this.toggleChoiceIndicator(false, true);
      this.emitChoice(heart, this.cards![0]);
    } else {
      this.renderer.setStyle(
        this.appCardsArray![0].nativeElement,
        'transform',
        'translate(-' + this.moveOutWidth + 'px, -100px) rotate(30deg)'
      );
      this.toggleChoiceIndicator(true, false);
      this.emitChoice(heart, this.cards![0]);
    }
    this.shiftRequired = true;
    this.transitionInProgress = true;
    return true
  } */

    handlePan(event: any) {
      if (
        event.deltaX === 0 ||
        (event.center.x === 0 && event.center.y === 0) ||
        !this.cards!.length ||
        this.transitionInProgress
      )
        return;
    
      this.renderer.addClass(this.appCardsArray![0].nativeElement, 'moving');
    
      if (event.deltaX > 0) {
        this.toggleChoiceIndicator(false, true);
      }
      if (event.deltaX < 0) {
        this.toggleChoiceIndicator(true, false);
      }
    
      let xMulti = event.deltaX * 0.03;
      let yMulti = event.deltaY / 80;
      let rotate = xMulti * yMulti;
    
      this.renderer.setStyle(
        this.appCardsArray![0].nativeElement,
        'transform',
        'translate(' +
          event.deltaX +
          'px, ' +
          event.deltaY +
          'px) rotate(' +
          rotate +
          'deg)'
      );
    
      this.shiftRequired = true;
    }
    

    handlePanEnd(event: any) {
      this.toggleChoiceIndicator(false, false);
    
      if (!this.cards!.length || this.transitionInProgress) return;
    
      this.renderer.removeClass(this.appCardsArray![0].nativeElement, 'moving');
    
      let keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;
      if (keep) {
        this.renderer.setStyle(
          this.appCardsArray![0].nativeElement,
          'transform',
          ''
        );
        this.shiftRequired = false;
      } else {
        let endX = Math.max(
          Math.abs(event.velocityX) * this.moveOutWidth!,
          this.moveOutWidth!
        );
        let toX = event.deltaX > 0 ? endX : -endX;
        let endY = Math.abs(event.velocityY) * this.moveOutWidth!;
        let toY = event.deltaY > 0 ? endY : -endY;
        let xMulti = event.deltaX * 0.05;
        let yMulti = event.deltaY / 80;
        let rotate = xMulti * yMulti;
    
        this.renderer.setStyle(
          this.appCardsArray![0].nativeElement,
          'transform',
          'translate(' +
            toX +
            'px, ' +
            (toY + event.deltaY) +
            'px) rotate(' +
            rotate +
            'deg)'
        );
    
        this.shiftRequired = true;
    
        this.emitChoice(!!(event.deltaX > 0), this.cards![0]);
      }
      this.transitionInProgress = true;
    }
    

  toggleChoiceIndicator(cross:  any, heart:  any) {
    this.crossVisible = cross;
    this.heartVisible = heart;
  }

  handleShift() {
    this.transitionInProgress = false;
    this.toggleChoiceIndicator(false, false);
    if (this.shiftRequired) {
      this.shiftRequired = false;
      setTimeout(() => {
        this.cards!.shift();
      }, 50);
    }
  }
  

  emitChoice(heart:any, card:any) {
    this.choiceMade.emit({
      choice: heart,
      payload: card,
    });
  }

  ngAfterViewInit() {
    this.moveOutWidth = document.documentElement.clientWidth * 1.7;
    this.appCardsArray = this.appCards!.toArray();
    this.appCards!.changes.subscribe(() => {
      this.appCardsArray = this.appCards!.toArray();
    });

    setTimeout(() => {
      console.log(this.cards)
      console.log(this.cards?.length)
    }, 3000);
  }

  async openInfoModal() {
    const iconElement = document.querySelector('.info-icon');
    const modal = document.querySelector('.modal-container');

    if (iconElement && modal) {
      const iconRect = iconElement.getBoundingClientRect();
      modal.classList.toggle('visible');
    }
  }

}
