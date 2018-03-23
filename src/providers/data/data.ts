import { Injectable } from '@angular/core';
import { Card } from '../../models/card-interface';
import { StorageProvider } from '../storage/storage';

const DB_KEY = 'expresscards';

@Injectable()
export class DataProvider {
  cardsDb: Array<Card>;

  constructor(private storageProvider: StorageProvider) {
    let cardsDb = this.storageProvider.get(DB_KEY);
    if (!cardsDb) {
      cardsDb = [
        { value: '0' },
        { value: '0.5' },
        { value: '1' },
        { value: '2' },
        { value: '3' },
        { value: '4' },
        { value: '5' },
        { value: '?' }
      ];
    }
    this.cardsDb = cardsDb;
  }

  getIndexOfCard(value: string) {
    for (let i = 0; i < this.cardsDb.length; i++) {
      if (this.cardsDb[i].value === value) {
        return i;
      }
    }
    return -1;
  }

  addCard(value: string) {
    let index = this.getIndexOfCard(value);
    if (index < 0) {
      this.cardsDb.push({ value: value });
      this.cardsDb.sort((a: Card, b: Card): number => {
        return a.value > b.value ? 1 : a.value < b.value ? -1 : 0;
      });
      this.storageProvider.set(DB_KEY, this.cardsDb);
    }
  }

  removeCard(value: string) {
    let index = this.getIndexOfCard(value);
    if (index > -1) {
      this.cardsDb.splice(index, 1);
      this.storageProvider.set(DB_KEY, this.cardsDb);
    }
  }

  getCards() {
    return this.cardsDb;
  }
}
