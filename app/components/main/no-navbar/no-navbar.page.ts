import {Page, NavController, NavParams} from 'ionic-framework/ionic';

import {HomePage} from '../../main/home/home.page'

@Page({
    template: `
    <h1>worked!!!</h1>
    <button (click)="back()">back</button>
    `
})

export class NoNavbarPage {
    private navCtrl: any;
    private navParams: any;

    constructor(
        navCtrl: NavController,
        navParams: NavParams
    ) {
        var self = this;

        self.navCtrl = navCtrl;
        self.navParams = navParams;
    }

    back() {
        var self = this;
        self.navCtrl.setRoot(HomePage);
    }
}
