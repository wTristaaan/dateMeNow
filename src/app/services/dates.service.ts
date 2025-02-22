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
      { id: "1", img: 'https://placehold.co/600x400', dateWith: 'Mon chéri ❤️', isLocked: false, view: false, bestActivity: "1", activities: ["1", "2", "2"] },
      { id: "2", img: 'https://placehold.co/600x400', dateWith: 'Théa', isLocked: true, view: false, bestActivity: "2", activities: [] },
      { id: "3", img: 'https://placehold.co/600x400', dateWith: 'Mon chéri ❤️', isLocked: false, view: true, bestActivity: "3", activities: [] },
      { id: "4", img: 'https://placehold.co/600x400', dateWith: 'Théa', isLocked: true, view: false, bestActivity: "4", activities: [] },
      { id: "5", img: 'https://placehold.co/600x400', dateWith: 'Mon chéri ❤️', isLocked: false, view: false, bestActivity: "1", activities: [] },
      { id: "6", img: 'https://placehold.co/600x400', dateWith: 'Théa', isLocked: true, view: false, bestActivity: "5", activities: [] },
      { id: "7", img: 'https://placehold.co/600x400', dateWith: 'Mon chéri ❤️', isLocked: false, view: false, bestActivity: "6", activities: [] },
      { id: "8", img: 'https://placehold.co/600x400', dateWith: 'Théa', isLocked: true, view: false, bestActivity: "7", activities: [] },
      { id: "9", img: 'https://placehold.co/600x400', dateWith: 'Mon chéri ❤️', isLocked: false, view: false, bestActivity: "8", activities: [] },
      { id: "10", img: 'https://placehold.co/600x400', dateWith: 'Théa', isLocked: true, view: false, bestActivity: "9", activities: [] },
      { id: "11", img: 'https://placehold.co/600x400', dateWith: 'Mon chéri ❤️', isLocked: false, view: false, bestActivity: "1", activities: [] },
      { id: "12", img: 'https://placehold.co/600x400', dateWith: 'Théa', isLocked: true, view: false, bestActivity: "10", activities: [] },
    ]).pipe(delay(1000));
  }

  sendDates(dates: any[]){
    this.sendDateList.next(dates)
  }

  sendClickOnDate(click: boolean){
    this.clickOnDate.next(click)
  }

  getDateIdea(){
    return of( [
        {
          img: "https://loremflickr.com/300/300",
          title: "Arcade",
          description: "Affrontez-vous dans des jeux rétro et modernes pour une sortie fun et compétitive.s",
          fullDescription: `🎮 En bref :
  
  
  
  💰 Budget : 30-60 € (jetons +
  snacks pour deux).
  
  
  
  ⏳ Durée : 1h30 à 3h.
  
  
  
  👟 Tenue idéale : Sneakers et
  vêtements légers (il fait vite
  chaud).
  
  
  
  🕒 Quand y aller ? En début de
  soirée pour une ambiance
  immersive et moins d’attente.
  
  
  
  ✨ Astuce : Commencez par les jeux
  de précision (flipper, basketball)
  avant les jeux physiques comme le
  air hockey ou la danse, pour garder
  votre énergie plus longtemps.`
        },
        {
          img: "https://loremflickr.com/300/300/dog",
          title: "Demo card 2",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "2 blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris",
          title: "Demo card 3",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "3 blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/brazil,rio",
          title: "Demo card 4",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 5",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 6",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 7",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 8",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 9",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 10",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 11",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 12",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 13",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 14",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 15",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 16",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 17",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 18",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 19",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 20",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 21",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 22",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 23",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 24",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 25",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 26",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
      ]).pipe(delay(1000));
  }
}
