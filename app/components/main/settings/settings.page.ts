'use strict';
import {NavController} from 'ionic-framework/ionic';
import {HomePage} from '../../main/home/home.page';

import {Page} from 'ionic-framework/ionic';

@Page({
    templateUrl: 'build/components/main/settings/settings.html'
})

export class SettingsPage {
    private navCtrl: any;
    constructor(navCtrl: NavController) {
        var self = this;
        self.navCtrl = navCtrl;
    }

    open() {
        this.navCtrl.setRoot(HomePage);
    }
}
