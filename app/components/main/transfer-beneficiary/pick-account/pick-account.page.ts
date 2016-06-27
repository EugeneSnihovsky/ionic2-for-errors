'use strict';
import {Component} from '@angular/core';
import {Modal, NavController} from 'ionic-angular';

import {ShowInfoModal} from './show-info/show-info.modal';
import {PaymentMethodPage} from '../payment-method/payment-method.page';
@Component({
    templateUrl: 'build/components/main/transfer-beneficiary/pick-account/pick-account.html'
})

export class PickAccountPage {
    constructor(
        private navCtrl: NavController
    ) { }

    public openModal(): Promise<any> {
        let modal = Modal.create(ShowInfoModal);
        return this.navCtrl.present(modal);
    }

    public openBroken() {
        return this.navCtrl.setRoot(PaymentMethodPage, {}, {animate: true, direction: 'forward'});
    }
}
