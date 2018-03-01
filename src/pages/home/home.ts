import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Card, DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private dataProvider: DataProvider) {}

  cards = [
    { value: "0" },
    { value: "1/2" },
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "5" },
    { value: "8" },
    { value: "13" },
    { value: "17" },
    { value: "23" }
  ];
}
