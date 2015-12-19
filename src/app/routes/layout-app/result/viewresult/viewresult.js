'use strict';
import template from './viewresult.html!text';
import {View, Component, Inject} from '../../../../ng-decorators';  // jshint unused: false
//start-non-standard
@Component({
    selector: 'viewresult'
})
@View({
    template: template
})
//end-non-standard
class ViewResult {
	constructor() {

	}
}
export default ViewResult;