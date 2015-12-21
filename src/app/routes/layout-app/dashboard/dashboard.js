'use strict';

import template from './dashboard.html!text';
import {RouteConfig, View, Component, Inject} from '../../../ng-decorators';  // jshint unused: false
//start-non-standard
@RouteConfig('app.home', {
    url: '/home',
    template: '<home></home>',
    data: {

    }
})
@Component({
    selector: 'home'
})
@View({
    template: template
})
@Inject('$location')
//end-non-standard
class Dashboard {
    constructor($location) {
        $('#md-card').addClass('animated bounceIn');
        this.anims = false;
        this.hello = 'test';
        this.$location = $location;
    }
    goStart() {
        $('#md-card').addClass('animated bounceOutDown');
        this.$location.path('start');
    }
    goHelp() {
        $('#md-card').addClass('animated bounceOutDown');
        this.$location.path('help');
    }
}

export default Dashboard;