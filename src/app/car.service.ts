import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() {}

  private carNamesSubject = new BehaviorSubject<string[]>([]);
  carNames$ = this.carNamesSubject.asObservable();

  addCarName(name: string): void {
    //Will add the name
    const currentNames = this.carNamesSubject.getValue();
    const updatedNames = [...currentNames, name];
    this.carNamesSubject.next(updatedNames);
  }
}
