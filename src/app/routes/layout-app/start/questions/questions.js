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
@Inject('$location', '$http', '$timeout', 'ResultService')
//end-non-standard
class Questions {
	constructor($location, $http, $timeout, ResultService) {
		this.$timeout = $timeout;
		this.hideItems = true;
		$('#questionId').addClass('animated bounceInUp questionId-first');
		this.animation($timeout, 'bounceInUp');
		this.counter = 1;
		this.$location = $location;
		this.data = new Data().data;
		this.dataType = new Data().type;
		this.changeQuestion();
		this.progressbarclass = 'progress-bar-info-first';
		this.counterQ = this.counter * 1.25;
		this.changeAnswerColor(0);
		this.lastAnimation = 'bounceInUp';
		this.ResultService = ResultService;
	}
	removeAnimation(animate) {
		$('#first-answer').removeClass('animated ' + animate);
		$('#second-answer').removeClass('animated ' + animate);
		$('#threeth-answer').removeClass('animated ' + animate);
		$('#fourth-answer').removeClass('animated ' + animate);
		$('#fifth-answer').removeClass('animated ' + animate);
	}
	animation($timeout, animate) {
		$timeout(function () {
			$('#first-answer').addClass('animated ' + animate);
			$('#first-answer').css('display', 'block');

		}, 10);
		$timeout(function () {
			$('#second-answer').addClass('animated ' + animate);
			$('#second-answer').css('display', 'block');

		}, 20);
		$timeout(function () {
			$('#threeth-answer').addClass('animated ' + animate);
			$('#threeth-answer').css('display', 'block');

		}, 30);
		$timeout(function () {
			$('#fourth-answer').addClass('animated ' + animate);
			$('#fourth-answer').css('display', 'block');

		}, 40);
		$timeout(function () {
			$('#fifth-answer').addClass('animated ' + animate);
			$('#fifth-answer').css('display', 'block');

		}, 50);
	}

	changeQuestion() {
		this.currentQ = this.data.data[this.counter - 1];
	}

	increase(answer) {
		var that = this;
		this.animation(this.$timeout, 'fadeOutDown');
		this.$timeout(function () {
			that.removeAnimation('fadeOutDown');
			if (that.counter < 80) {
				that.counter++;
				that.changeQuestion();
				that.increaseCunterProgress();
				that.changeProgressColor();
				that.calcAnswer(answer);
			} else {
				that.counter++;
				that.calcAnswer(answer);
				that.$location.path('result');
			}
		}, 200);

	}

	increaseCunterProgress() {
		this.counterQ += 1.25;
	}

	changeAnswerColor(level) {
		this.firstanswer = 'first-answer-' + level;
		this.secondanswer = 'second-answer-' + level;
		this.threethanswer = 'threeth-answer-' + level;
		this.fourthanswer = 'fourth-answer-' + level;
		this.fifthanswer = 'fifth-answer-' + level;
	}

	changeProgressColor() {
		this.removeAnimation(this.lastAnimation);
		switch (this.counter) {
			case 20:
				this.progressbarclass = 'progress-bar-info-two';
				this.changeAnswerColor(1);
				$('#questionId').removeClass('questionId-first ' + this.lastAnimation);
				this.lastAnimation = 'fadeInLeft';
				this.changeQuestionColor('second');
				break;
			case 40:
				this.progressbarclass = 'progress-bar-info-three';
				this.changeAnswerColor(2);
				$('#questionId').removeClass('questionId-second ' + this.lastAnimation);
				this.lastAnimation = 'fadeInDown';
				this.changeQuestionColor('thirth');
				break;
			case 60:
				this.progressbarclass = 'progress-bar-info-four';
				this.changeAnswerColor(3);
				$('#questionId').removeClass('questionId-thirth ' + this.lastAnimation);
				this.lastAnimation = 'lightSpeedIn';
				this.changeQuestionColor('fourth');
				break;
		}

		this.animation(this.$timeout, this.lastAnimation);
	}

	calcAnswer(answer) {
		var number = 0;
		this.dataType.data.forEach(function (element) {
			element.questions.forEach(function (item) {
				if (item === this.counter - 1) {
					number = element.number;
				}
			}, this);

		}, this);
		this.ResultService.increase(number, answer);
	}

	changeQuestionColor(level) {
		$('#questionId').addClass('animated questionId-' + level + ' ' + this.lastAnimation);
	}

	decrease() {
		if (this.counter >= 1) { this.counter--; }
	}
}

export default Questions;