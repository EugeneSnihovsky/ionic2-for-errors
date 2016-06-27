import {Component} from '@angular/core';
import {ViewController, NavController} from 'ionic-angular';

import {PaymentMethodPage} from '../../payment-method/payment-method.page';

@Component({
    templateUrl: 'build/components/main/transfer-beneficiary/pick-account/show-info/show-info.html'
})

export class ShowInfoModal {
    constructor(
        private viewCtrl: ViewController,
        private navCtrl: NavController
    ) { }

    public dismiss(): Promise<any> {
        return this.viewCtrl.dismiss();
    }

    public openBroken1(): Promise<any> {
        return this.navCtrl.setRoot(PaymentMethodPage, {}, {animate: true, direction: 'forward'});
    }

    public openBroken2(): Promise<any> {
        return this.viewCtrl.dismiss()
            .then(() => this.navCtrl.setRoot(PaymentMethodPage, {}, {animate: true, direction: 'forward'}));
    }

    public openBroken3(): Promise<any> {
        this.viewCtrl.destroy();
        return this.navCtrl.setRoot(PaymentMethodPage, {}, {animate: true, direction: 'forward'});
    }

    public openBroken4(): Promise<any> {
        this.viewCtrl.onDestroy(() => this.navCtrl.setRoot(PaymentMethodPage, {}, {animate: true, direction: 'forward'}));
        return this.viewCtrl.dismiss();
    }
}
