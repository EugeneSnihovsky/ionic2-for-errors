'use strict';
import {forwardRef} from 'angular2/core';
import {Page} from 'ionic-framework/ionic';

import {TopNavBarComponent} from '../../navigation/top-navbar/top-navbar.component';

@Page({
    directives: [forwardRef(() => TopNavBarComponent)],
    templateUrl: 'build/components/main/home/home.html'
})

export class HomePage {

    constructor() {
        var self = this;
    }
}
