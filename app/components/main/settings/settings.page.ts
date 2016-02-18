'use strict';

import {Page} from 'ionic-framework/ionic';

import {TopNavBarComponent} from '../../navigation/top-navbar/top-navbar.component';

@Page({
    directives: [TopNavBarComponent],
    templateUrl: 'build/components/main/settings/settings.html'
})

export class SettingsPage {

    constructor() {
        var self = this;
    }
}
