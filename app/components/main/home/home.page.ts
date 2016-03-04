'use strict';
import {NavController} from 'ionic-framework/ionic';
import {SettingsPage} from '../../main/settings/settings.page';


import {Page} from 'ionic-framework/ionic';

@Page({
    templateUrl: 'build/components/main/home/home.html'
})

export class HomePage {
    private navCtrl: any;
    constructor(navCtrl: NavController) {
        var self = this;
        self.navCtrl = navCtrl;
    }

    open(name) {
        this.navCtrl.setRoot(SettingsPage);
    }
}
