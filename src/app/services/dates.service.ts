import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private sendDateList = new BehaviorSubject<any[]>([]);
  sendDateList$ = this.sendDateList.asObservable();

  private clickOnDate = new BehaviorSubject<boolean>(false);
  clickOnDate$ = this.clickOnDate.asObservable();

  constructor() {}

  getDates(): Observable<any> {
    return of([
      { img: 'https://placehold.co/600x400', dateWith: 'Mon chéri ❤️', isLocked: false },
      { img: 'https://placehold.co/600x400', dateWith: 'Théa', isLocked: true },
      { img: 'https://placehold.co/600x400', dateWith: 'Mon chéri ❤️', isLocked: false },
      { img: 'https://placehold.co/600x400', dateWith: 'Théa', isLocked: true },
      { img: 'https://placehold.co/600x400', dateWith: 'Mon chéri ❤️', isLocked: false },
      { img: 'https://placehold.co/600x400', dateWith: 'Théa', isLocked: true },
      { img: 'https://placehold.co/600x400', dateWith: 'Mon chéri ❤️', isLocked: false },
      { img: 'https://placehold.co/600x400', dateWith: 'Théa', isLocked: true },
      { img: 'https://placehold.co/600x400', dateWith: 'Mon chéri ❤️', isLocked: false },
      { img: 'https://placehold.co/600x400', dateWith: 'Théa', isLocked: true },
      { img: 'https://placehold.co/600x400', dateWith: 'Mon chéri ❤️', isLocked: false },
      { img: 'https://placehold.co/600x400', dateWith: 'Théa', isLocked: true },
    ]).pipe(delay(1000));
  }

  sendDates(dates: any[]){
    this.sendDateList.next(dates)
  }

  sendClickOnDate(click: boolean){
    this.clickOnDate.next(click)
  }
}
