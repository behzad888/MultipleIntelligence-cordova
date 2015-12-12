'use strict';
import './questions/questions';
import template from './start.html!text';
import {RouteConfig, Component, View} from '../../../ng-decorators';  // jshint unused: false

//start-non-standard
@RouteConfig('app.start', {
    url: '/start',
    template: '<start></start>',
    data: {
        
    }
})
@Component({
    selector: 'start'
})
@View({
    template: template
})
//end-non-standard
class Start {}
