import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cards = Array<{ value: string }>();
  selectedCard: { value: string };

  constructor(private actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController, private dataProvider: DataProvider) {
    this.cards = this.dataProvider.getCards();
  }

  showAddCardMenu() {
    this.alertCtrl
      .create({
        title: 'Add a new card',
        message: 'Enter the card\'s value',
        inputs: [{
          name: 'card',
          placeholder: 'Value'
        }],
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
        inputs: [{
          name: 'card',
          placeholder: 'Value'
        }],
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

  showEditMenu() {
    this.actionSheetCtrl
      .create({
        title: 'Modify your cards',
        buttons: [
          {
            text: 'Add',
            handler: _ => {
              this.showAddCardMenu();
            }
          },
          {
            text: 'Delete',
            role: 'destructive',
            handler: _ => {
              this.showDeleteCardMenu();
            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: _ => {}
          },
        ]
      })
      .present();
  }

  selectCard(card: any) {
    this.selectedCard = card;
  }
}
