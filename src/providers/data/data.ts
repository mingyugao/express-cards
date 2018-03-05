import { Injectable } from '@angular/core';
import { StorageProvider } from '../storage/storage';

export class Card {
  value: string
}

const DB_KEY = 'expresscards';

@Injectable()
export class DataProvider {
  cardsDb: Array<Card>;

  constructor(private storageProvider: StorageProvider) {
    let cardsDb = this.storageProvider.get(DB_KEY);
    if (!cardsDb) {
      cardsDb = [];
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
      this.cardsDb.push({"value":value});
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