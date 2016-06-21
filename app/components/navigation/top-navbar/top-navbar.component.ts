'use strict';

import {IONIC_DIRECTIVES} from 'ionic-angular/config/directives';
import {NavController} from 'ionic-angular';
import {Component, Input} from '@angular/core';
import {TranslatePipe} from 'ng2-translate/ng2-translate';

import {CalculatorPage} from '../../main/calculator/calculator.page';
import {DashboardsPage} from '../../main/dashboards/dashboards.page';

@Component({
    selector: 'top-navbar',
    templateUrl: 'build/components/navigation/top-navbar/top-navbar.html',
    directives: [IONIC_DIRECTIVES],
    pipes: [TranslatePipe]
})

export class TopNavBarComponent {
    @Input() title: string;

    public pages: any = {
        dashboards: DashboardsPage,
        calculator: CalculatorPage
    };

    constructor(
        private navCtrl: NavController
    ) { }

    public openPage(name: string) {
        setTimeout(() => {
            this.navCtrl.setRoot(this.pages[name]);
        }, 100);
    }
}
