'use strict';
import {Component, forwardRef} from '@angular/core';
import {NavController} from 'ionic-angular';

import {TopNavBarComponent} from '../../navigation/top-navbar/top-navbar.component';



@Component({
    directives: [forwardRef(() => TopNavBarComponent)],
    templateUrl: 'build/components/main/dashboards/dashboards.html'
})

export class DashboardsPage {
    public currentView: string = 'accountBalance';

    constructor(
        private navCtrl: NavController
    ) { }
}
