'use strict';

import {Component, provide, Type} from '@angular/core';//https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Http} from '@angular/http';
import {TranslateService, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {ionicBootstrap, Platform} from 'ionic-angular';

import {CalculatorPage} from '../../components/main/calculator/calculator.page';

@Component({
    template: `
    <ion-nav [root]="rootPage"></ion-nav>
    `
})
export class MyApp {
    rootPage: Type; // initialization in translationConfig()

    constructor(
        platform: Platform,
        private translate: TranslateService
    ) {
        platform.ready().then(() => {
            this.translationConfig();
        });
    }

    translationConfig() {
        var userLang = navigator.language.split('-')[0]; // use navigator lang if available
        userLang = /(zh|en)/gi.test(userLang) ? userLang : 'en';

        this.translate.setDefaultLang('en');
        this.translate.use(userLang)
            .subscribe(langObj => {
                this.rootPage = CalculatorPage;
            })
    }
}

ionicBootstrap(MyApp, [
        TranslateService,
        provide(TranslateLoader, {
            useFactory: (http: Http) => new TranslateStaticLoader(http, 'build/assets/i18n', '.json'),
            deps: [Http]
        })],
    {/*config placed here*/}); // http://ionicframework.com/docs/v2/api/config/Config/
