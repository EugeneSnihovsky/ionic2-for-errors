'use strict';
import {Component, forwardRef} from '@angular/core';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
import {NavController} from 'ionic-angular';
import {TopNavBarComponent} from '../../navigation/top-navbar/top-navbar.component';

import {PickAccountPage} from '../../main/transferBeneficiary/pick-account/pick-account.page';

@Component({
    directives: [forwardRef(() => TopNavBarComponent)],
    templateUrl: 'build/components/main/calculator/calculator.html',
    pipes: [TranslatePipe]
})

export class CalculatorPage {
    constructor(
        private navCtrl: NavController
    ) { }

     public newTransfer() {
        this.navCtrl.setRoot(PickAccountPage);
    }
}
