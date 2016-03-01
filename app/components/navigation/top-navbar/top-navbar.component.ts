'use strict';

import {NavbarTemplate, Navbar, Item, Icon, Segment, SegmentButton, Menu, MenuToggle, MenuClose, NavController, NavParams} from 'ionic-framework/ionic';
import {Component} from 'angular2/core';

import {SettingsPage} from '../../main/settings/settings.page';

@Component({
    selector: 'top-navbar',
    templateUrl: 'build/components/navigation/top-navbar/top-navbar.html',
    directives: [NavbarTemplate, Navbar, Item, Icon, Segment, SegmentButton, Menu, MenuToggle, MenuClose]
})

export class TopNavBarComponent {
    private navCtrl: any;
    private navParams: any;

    constructor(navCtrl: NavController, navParams: NavParams) {
        var self = this;
        self.navCtrl = navCtrl;
        self.navParams = navParams;
    }

    openPage(name) {
        var self = this;

        self.navCtrl.setRoot(SettingsPage);
    }
}