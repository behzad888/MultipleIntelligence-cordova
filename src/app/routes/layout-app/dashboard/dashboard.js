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
@Inject('$location', '$timeout')
//end-non-standard
class Dashboard {
	constructor($location, $timeout) {
		this.anims = false;
		this.hello = 'test';
		this.$location = $location;
		var that = this;
		this.$timeout = $timeout;
		$timeout(function () {
			that.anims = true;
		}, 10)
	}
	goStart() {
		this.anims = false;
		var that = this;
		this.$timeout(function () {		
			that.$location.path('start');
		}, 300)
	}
}

export default Dashboard;