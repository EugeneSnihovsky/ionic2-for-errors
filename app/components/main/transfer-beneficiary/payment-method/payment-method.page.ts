'use strict';
import {Component, OnInit} from '@angular/core';
import {NavController, Loading} from 'ionic-angular';

import {PickAccountPage} from '../pick-account/pick-account.page'

@Component({
    templateUrl: 'build/components/main/transfer-beneficiary/payment-method/payment-method.html'
})

export class PaymentMethodPage implements OnInit {

    ngOnInit() {
        var loadingInstance = Loading.create({
            content: 'Loading...'
        });
        this.navCtrl.present(loadingInstance);

        setTimeout(() => {
            loadingInstance.dismiss();
        }, 1000)
    }

    constructor(
        private navCtrl: NavController
    ) { }

    public back(): Promise<any> {
        return this.navCtrl.setRoot(PickAccountPage, {}, {animate: true, direction: 'forward'});
    }
}
