'use strict';
import './viewresult/viewresult';
import template from './result.html!text';
import {RouteConfig, Component, View} from '../../../ng-decorators';  // jshint unused: false

//start-non-standard
@RouteConfig('app.result', {
    url: '/result',
    template: '<result></result>',
    data: {

    }
})
@Component({
    selector: 'result'
})
@View({
    template: template
})
//end-non-standard
class Result {
}
