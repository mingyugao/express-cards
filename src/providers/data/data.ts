import { Injectable } from '@angular/core';
import { StorageProvider } from '../storage/storage';

export class Card {
  value: string
}

const DB_KEY = 'db';

@Injectable()
export class DataProvider {
  cardsDb: Array<Card>;

  constructor(private storageProvider: StorageProvider) {
    let cardsDb = this.storageProvider.get(DB_KEY);
    if (!cardsDb) {
      this.cardsDb = [];
    }
    console.log(cardsDb);
  }

  cardExists(value: string) {
    return false;
  }

  addCard(value: string) {
    if (!cardExists(value)) {
    }
  }

  removeCard(value: string) {
  }
}
