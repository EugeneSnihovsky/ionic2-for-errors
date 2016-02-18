///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/> // 2.0.0-beta.6 breacking change
'use strict';

import {App, Platform} from 'ionic-framework/ionic';

import {SignInPage} from '../../components/auth/sign-in/sign-in.page';


//* this is good feature for compare type of pages, but it didn't work now
// https://angular.io/docs/ts/latest/api/core/Type-interface.html
// import {Type} from 'angular2/core';

@App({
    template: `
    <ion-nav [root]="rootPage"></ion-nav>
    `,
    config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
    rootPage: any = SignInPage;

    constructor(platform: Platform) {
        platform.ready().then(() => {
            //**
        });
    }
}
