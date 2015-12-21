'use strict';

import {Service, Inject} from '../../ng-decorators'; // jshint unused: false

//start-non-standard
@Service({
    serviceName: 'ResultService'
})
//end-non-standard
class ResultService {
	constructor() {
		this.type1 = 0;
		this.type2 = 0;
		this.type3 = 0;
		this.type4 = 0;
		this.type5 = 0;
		this.type6 = 0;
		this.type7 = 0;
		this.type8 = 0;
	}
	clear() {
		this.type1 = 0;
		this.type2 = 0;
		this.type3 = 0;
		this.type4 = 0;
		this.type5 = 0;
		this.type6 = 0;
		this.type7 = 0;
		this.type8 = 0;
	}
	increase(number, answer) {
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

}