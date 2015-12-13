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
@Inject('$location', '$http', '$timeout')
//end-non-standard
class Questions {
	constructor($location, $http, $timeout) {
		this.$timeout = $timeout;
		$('#questionId').addClass('animated bounceInUp')
		$timeout(function () {
			$('#first-answer').addClass('animated bounceInUp');
		}, 50);
		$timeout(function () {
			$('#second-answer').addClass('animated bounceInUp');
		}, 70);
		$timeout(function () {
			$('#threeth-answer').addClass('animated bounceInUp');
		}, 90);
		$timeout(function () {
			$('#fourth-answer').addClass('animated bounceInUp');
		}, 110);
		$timeout(function () {
			$('#fifth-answer').addClass('animated bounceInUp');
		}, 130);



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