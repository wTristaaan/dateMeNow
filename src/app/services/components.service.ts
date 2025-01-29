import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  constructor() { }

  setData(newData: any) {
    this.dataSubject.next(newData);
  }

  getData() {
    return this.dataSubject.value;
  }
}
