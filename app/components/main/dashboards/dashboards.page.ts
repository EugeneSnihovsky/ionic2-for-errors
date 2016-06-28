'use strict';
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    templateUrl: 'build/components/main/dashboards/dashboards.html'
})

export class DashboardsPage {
    public currentView: string = 'accountBalance';

    constructor(
        private navCtrl: NavController
    ) { }
}
