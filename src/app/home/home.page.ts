import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  showLoginDiv = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.showLoginDiv = true;
    }, 1000);
  }

}
