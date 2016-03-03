'use strict';

import {NavbarTemplate, Navbar, Item, Icon, Segment, SegmentButton, Menu, MenuToggle, MenuClose, NavController, NavParams} from 'ionic-framework/ionic';
import {Component} from 'angular2/core';


import {HomePage} from '../../main/home/home.page';
import {SettingsPage} from '../../main/settings/settings.page';

@Component({
    selector: 'top-navbar',
    templateUrl: 'build/components/navigation/top-navbar/top-navbar.html',
    directives: [NavbarTemplate, Navbar, Item, Icon, Segment, SegmentButton, Menu, MenuToggle, MenuClose]
})

export class TopNavBarComponent {
    private navCtrl: any;
    private navParams: any;

    public currentPageName: string;

    public pages: any = {
        home: HomePage,
        settings: SettingsPage
    };

    constructor(navCtrl: NavController, navParams: NavParams) {
        var self = this;
        self.navCtrl = navCtrl;
        self.navParams = navParams;

        self.currentPageName = self.navParams.data.navbarCurrentPage || 'home';
    }

    openPage(name) {
        var self = this;
        // timeout is a hack to avoid "dehydrated detect" error
        // https://github.com/angular/angular/issues/6786#issuecomment-185429140
        // without it app work with droping error to console, but still freeze after 10-11 navigations click
        if (self.currentPageName !== name) {
            setTimeout(() => {
                self.navCtrl.setRoot(self.pages[name], {navbarCurrentPage: name});
            }, 100);
        }
    }
}