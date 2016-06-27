'use strict';

import {Component, Type} from '@angular/core';//https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {ionicBootstrap, Platform} from 'ionic-angular';

import {PickAccountPage} from '../../components/main/transfer-beneficiary/pick-account/pick-account.page';

@Component({
    template: `
    <ion-nav [root]="rootPage"></ion-nav>
    `
})
export class MyApp {
    rootPage: Type;

    constructor(
        platform: Platform
    ) {
        platform.ready().then(() => {
            this.rootPage = PickAccountPage;
        });
    }
}

ionicBootstrap(MyApp, [],
    {/*config placed here*/}); // http://ionicframework.com/docs/v2/api/config/Config/
