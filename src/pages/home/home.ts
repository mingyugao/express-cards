import { Component } from '@angular/core';
import {
  ActionSheetController,
  ActionSheetOptions,
  ActionSheetButton,
  AlertController,
  ModalController
} from 'ionic-angular';
import { Card } from '../../models/card-interface';
import { CardModalPage } from '../card-modal/card-modal';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cards: Array<Card> = [];
  selectedCard: Card;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private dataProvider: DataProvider
  ) {
    this.cards = this.dataProvider.getCards();
  }

  showAddCardMenu() {
    this.alertCtrl
      .create({
        title: 'Add a new card',
        message: "Enter the card's value",
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
        message: "Enter the card's value",
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

  showEditMenu() {
    const opt: ActionSheetOptions = {
      buttons: [
        <ActionSheetButton>{
          text: 'Add',
          handler: _ => {
            this.showAddCardMenu();
          }
        },
        <ActionSheetButton>{
          text: 'Delete',
          role: 'destructive',
          handler: _ => {
            this.showDeleteCardMenu();
          }
        },
        <ActionSheetButton>{
          text: 'Cancel',
          role: 'cancel',
          handler: _ => {}
        }
      ]
    };
    this.actionSheetCtrl.create(opt).present();
  }

  showCard(value: string) {
    console.log(value);
    this.modalCtrl.create(CardModalPage, value).present();
  }
}
