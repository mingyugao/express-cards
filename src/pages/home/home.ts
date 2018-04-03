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

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private dataProvider: DataProvider
  ) {
    this.cards = this.dataProvider.getCards();
  }

  showCard(value: string) {
    this.modalCtrl.create(CardModalPage, { value: value }).present();
  }

  showAddCardMenu() {
    setTimeout(() => {
      this.alertCtrl
        .create({
          title: 'Add a new card',
          message: "Enter the card's value",
          inputs: [
            {
              name: 'value',
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
                if (data && data.value) {
                  this.dataProvider.addCard(data.value);
                }
                this.cards = this.dataProvider.getCards();
              }
            }
          ]
        })
        .present();
    }, 100);
  }

  showCardOptionsMenu(value: string) {
    const opt: ActionSheetOptions = {
      buttons: [
        <ActionSheetButton>{
          text: 'Edit',
          handler: _ => {
            setTimeout(() => {
              this.alertCtrl
                .create({
                  title: 'Editing card',
                  message: "Enter a new value",
                  inputs: [
                    {
                      name: 'newValue',
                      placeholder: 'New value'
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
                        if (data && data.newValue) {
                          this.dataProvider.removeCard(value)
                          this.dataProvider.addCard(data.newValue);
                        }
                        this.cards = this.dataProvider.getCards();
                      }
                    }
                  ]
                })
                .present();
            }, 100);
          }
        },
        <ActionSheetButton>{
          text: 'Remove',
          role: 'destructive',
          handler: _ => {
            this.dataProvider.removeCard(value);
            this.cards = this.dataProvider.getCards();
          }
        },
        <ActionSheetButton>{
          text: 'Cancel',
          role: 'cancel',
          handler: _ => {}
        }
      ]
    }
    this.actionSheetCtrl.create(opt).present();
  }
}
