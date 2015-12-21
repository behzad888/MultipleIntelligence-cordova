'use strict';
import template from './helptext.html!text';
import {View, Component, Inject} from '../../../../ng-decorators';  // jshint unused: false
//start-non-standard
@Component({
    selector: 'helptext'
})
@View({
    template: template
})
//end-non-standard
class HelpText {
    constructor(){
        $('#helpId').addClass('animated bounceInUp');
    }
}
export default HelpText;