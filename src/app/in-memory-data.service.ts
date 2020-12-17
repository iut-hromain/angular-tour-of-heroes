import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Nicolas BEM' },
      { id: 2, name: 'Maxence' },
      { id: 3, name: 'Xavier' },
      { id: 4, name: 'Nobuki' },
      { id: 5, name: 'Petru' },
      { id: 6, name: 'Lord Soupex' },
      { id: 7, name: 'El krakito' },
      { id: 8, name: 'Kevin' },
      { id: 9, name: 'Elias' },
      { id: 10, name: 'Mickey' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
