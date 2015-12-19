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
		$('#questionId').addClass('animated bounceInUp questionId-first');
		this.animation($timeout, 'bounceInUp');
		this.counter = 78;
		this.$location = $location;
		this.data = new Data().data;
		this.dataType = new Data().type;
		this.changeQuestion();
		this.progressbarclass = 'progress-bar-info-first';
		this.counterQ = this.counter;
		this.changeAnswerColor(0);
		this.lastAnimation = 'bounceInUp';

		this.type1 = 0;
		this.type2 = 0;
		this.type3 = 0;
		this.type4 = 0;
		this.type5 = 0;
		this.type6 = 0;
		this.type7 = 0;
		this.type8 = 0;
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
		if (this.counter < 80) {
			this.counter++;
			this.changeQuestion();
			this.increaseCunterProgress();
			this.changeProgressColor();
			this.calcAnswer(answer);
		}else{
			this.$location.path('result');
		}
	}

	increaseCunterProgress() {
		this.counterQ++;
		switch (this.counterQ) {
			case 20:
				this.counterQ += 5;
				break;
			case 40:
				this.counterQ += 5;
				break;
			case 60:
				this.counterQ += 5;
				break;
			case 80:
				this.counterQ += 5;
				break;
		}
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
		switch (number) {
			case 1:
				this.type1 += answer;
				break;
			case 2:
				this.type2 += answer;
				break;
			case 3:
				this.type3 += answer;
				break;
			case 4:
				this.type4 += answer;
				break;
			case 5:
				this.type5 += answer;
				break;
			case 6:
				this.type6 += answer;
				break;
			case 7:
				this.type7 += answer;
				break;
			case 8:
				this.type8 += answer;
				break;
		}
	}

	changeQuestionColor(level) {
		$('#questionId').addClass('animated questionId-' + level + ' ' + this.lastAnimation);
	}

	decrease() {
		if (this.counter >= 1) { this.counter--; }
	}
}

export default Questions;