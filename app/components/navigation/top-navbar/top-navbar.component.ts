'use strict';

import {NavbarTemplate, Navbar, Item, Icon, Segment, SegmentButton, Menu, MenuToggle, MenuClose, NavController, NavParams} from 'ionic-framework/ionic';
import {Component} from 'angular2/core';


import {SignInPage} from '../../auth/sign-in/sign-in.page';
import {HomePage} from '../../main/home/home.page';
import {SettingsPage} from '../../main/settings/settings.page';
import {NoNavbarPage} from '../../main/no-navbar/no-navbar.page';

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

        if (name === 'start') {
            self.navCtrl.setRoot(SignInPage);
        } else if (name === 'home') {
            self.navCtrl.setRoot(HomePage);
        } else if (name === 'settings') {
            self.navCtrl.setRoot(SettingsPage);
        } else if (name === 'nonavbar') {
            self.navCtrl.setRoot(NoNavbarPage);
        }
    }
}