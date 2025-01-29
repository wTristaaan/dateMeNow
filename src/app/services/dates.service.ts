import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  constructor() {}

  getDates(): Observable<any> {
    return of([]).pipe(delay(1000));
  }
}
