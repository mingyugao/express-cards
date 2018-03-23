import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-card-modal',
  templateUrl: 'card-modal.html',
})
export class CardModalPage {
  value: string;

  constructor(private navCtrl: NavController, private params: NavParams, private viewCtrl: ViewController) {
    this.value = this.params.get('value');
  }
}
