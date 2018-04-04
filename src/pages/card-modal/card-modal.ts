import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-card-modal',
  templateUrl: 'card-modal.html'
})
export class CardModalPage {
  shown: boolean = false;
  value: string;

  constructor(private params: NavParams, private viewCtrl: ViewController) {
    this.value = this.params.get('value');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  flipCard(): void {
    this.shown = !this.shown;
  }
}
