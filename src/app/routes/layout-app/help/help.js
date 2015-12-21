'use strict';
import './helptext/helptext';
import template from './help.html!text';
import {RouteConfig, Component, View} from '../../../ng-decorators';  // jshint unused: false

//start-non-standard
@RouteConfig('app.help', {
    url: '/help',
    template: '<help></help>',
    data: {

    }
})
@Component({
    selector: 'help'
})
@View({
    template: template
})
//end-non-standard
class Help { }
