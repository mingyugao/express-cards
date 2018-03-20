import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cards = [];

  constructor(private dataProvider: DataProvider) {
    this.cards = this.dataProvider.getCards();
  }
}
