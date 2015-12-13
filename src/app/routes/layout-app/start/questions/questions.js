'use strict';
import Data from './data';
import template from './questions.html!text';
import {View, Component, Inject} from '../../../../ng-decorators';  // jshint unused: false
//start-non-standard
@Component({
    selector: 'questions'
})
@View({
    template: template
})
@Inject('$location', '$http')
//end-non-standard
class Questions {
	constructor($location, $http) {
		$('#questionId').addClass('animated bounceInUp');
		this.counter = 1;
		this.$location = $location;
		this.data = new Data().data;
		this.currentQ = this.data.data[this.counter - 1];
	}

	increase() {
		if (this.counter < 80) { this.counter++; }
	}
	decrease() {
		if (this.counter >= 1) { this.counter--; }
	}
}

export default Questions;