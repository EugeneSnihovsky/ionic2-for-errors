'use strict';
import {Component, forwardRef} from '@angular/core';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
import {NavController} from 'ionic-angular';

import {TopNavBarComponent} from '../../../navigation/top-navbar/top-navbar.component';
import {DashboardsPage} from '../../dashboards/dashboards.page';

@Component({
    providers: [],
    directives: [forwardRef(() => TopNavBarComponent)],
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
