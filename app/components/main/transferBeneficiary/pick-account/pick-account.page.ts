'use strict';
import {Component} from '@angular/core';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
import {NavController} from 'ionic-angular';

import {DashboardsPage} from '../../dashboards/dashboards.page';

@Component({
    templateUrl: 'build/components/main/transferBeneficiary/pick-account/pick-account.html',
    pipes: [TranslatePipe]
})

export class PickAccountPage {
    constructor(
        private navCtrl: NavController
    ) { }

    public createNew() {
        return this.navCtrl.setRoot(DashboardsPage, {}, {animate: true, direction: 'forward'});
    }
}
