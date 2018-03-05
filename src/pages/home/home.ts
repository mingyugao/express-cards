import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cards = [];

  constructor(public navCtrl: NavController, private dataProvider: DataProvider) {
    this.cards = this.dataProvider.getCards();
  }
}
