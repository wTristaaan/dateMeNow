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
          title: "Demo card 5",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },{
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 5",
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
          title: "Demo card 5",
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
          title: "Demo card 5",
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
          title: "Demo card 5",
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
          title: "Demo card 5",
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
          title: "Demo card 5",
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
          title: "Demo card 5",
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
          title: "Demo card 5",
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
          title: "Demo card 5",
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
          title: "Demo card 5",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
        {
          img: "https://loremflickr.com/300/300/paris,girl/all",
          title: "Demo card 5",
          description: "This is a demo for Tinder like swipe cards",
          fullDescription: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
        },
      ]).pipe(delay(1000));
  }
}
