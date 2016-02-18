import {Page, NavController, NavParams} from 'ionic-framework/ionic';

import {HomePage} from '../../main/home/home.page'

@Page({
    templateUrl: 'build/components/auth/sign-in/sign-in.html'
})

export class SignInPage {
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

    signIn() {
        var self = this;
        self.navCtrl.setRoot(HomePage, {navbarCurrentPage: 'home'});
    }

}
