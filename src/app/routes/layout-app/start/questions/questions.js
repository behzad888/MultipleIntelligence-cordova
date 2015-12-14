'use strict';
import Data from './data';
import template from './questions.html!text';
import {View, Component, Inject} from '../../../../ng-decorators';  // jshint unused: false
import $ from 'jquery';
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
		this.hideItems = true;
		$('#questionId').addClass('animated bounceInUp');
		$timeout(function () {
			$('#first-answer').addClass('animated bounceInUp');
			$('#first-answer').css('display','block')
		}, 10);
		$timeout(function () {
			$('#second-answer').addClass('animated bounceInUp');
			$('#second-answer').css('display','block')
		}, 20);
		$timeout(function () {
			$('#threeth-answer').addClass('animated bounceInUp');
			$('#threeth-answer').css('display','block')
		}, 30);
		$timeout(function () {
			$('#fourth-answer').addClass('animated bounceInUp');
			$('#fourth-answer').css('display','block')
		}, 40);
		$timeout(function () {
			$('#fifth-answer').addClass('animated bounceInUp');
			$('#fifth-answer').css('display','block')
		}, 50);
		


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