import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-manage',
  templateUrl: 'manage.html',
})
export class ManagePage {
  constructor(private alertCtrl: AlertController, private dataProvider: DataProvider) {}

  showAddCardMenu() {
    this.alertCtrl
      .create({
        title: 'Add a new card',
        message: 'Enter the card\'s value',
        inputs: [
          {
            name: 'card',
            placeholder: 'Value'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: _ => {}
          },
          {
            text: 'Save',
            handler: data => {
              if (data && data.card) {
                this.dataProvider.addCard(data.card);
              }
            }
          }
        ]
      })
      .present();
  }

  showDeleteCardMenu() {
    this.alertCtrl
      .create({
        title: 'Remove a card',
        message: 'Enter the card\'s value',
        inputs: [
          {
            name: 'card',
            placeholder: 'Value'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: _ => {}
          },
          {
            text: 'Delete',
            handler: data => {
              if (data && data.card) {
                this.dataProvider.removeCard(data.card);
              }
            }
          }
        ]
      })
      .present();
  }
}
