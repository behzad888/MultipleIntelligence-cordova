'use strict';
import './start/start';
import './dashboard/dashboard';
import './result/result';
import template from './layout-app.html!text';
import {RouteConfig, Inject} from '../../ng-decorators';  // jshint unused: false

//start-non-standard
@RouteConfig('app', {
    url: '',
    abstract: false,
    template: template
})
@Inject('$location')
//end-non-standard
class LayoutApp {
    constructor($location) {
        $location.path('home');
    }
}
