'use strict';
import Data from './data';
import $ from 'jquery';
import angular from 'angular';
import template from './viewresult.html!text';
import {View, Component, Inject} from '../../../../ng-decorators';  // jshint unused: false
//start-non-standard
@Component({
    selector: 'viewresult'
})
@View({
    template: template
})
@Inject('ResultService', 'ngDialog','$location')
//end-non-standard
class ViewResult {
    constructor(ResultService, ngDialog,$location) {
        this.ResultService = ResultService;
        this.data = new Data().data;
        this.arrayTypes = [];
        this.pushToArray();
        this.ngDialog = ngDialog;
        this.$location = $location;
        $('#resultId').addClass('animated bounceInUp');
    }
    pushToArray() {
        this.arrayTypes.push({ 'type': '1', 'value': this.ResultService.type1, progressbarclass:'progress-bar-info'});
        this.arrayTypes.push({ 'type': '2', 'value': this.ResultService.type2, progressbarclass:'progress-bar-info-two'});
        this.arrayTypes.push({ 'type': '3', 'value': this.ResultService.type3, progressbarclass:'progress-bar-info-three'});
        this.arrayTypes.push({ 'type': '4', 'value': this.ResultService.type4, progressbarclass:'progress-bar-info-four'});
        this.arrayTypes.push({ 'type': '5', 'value': this.ResultService.type5, progressbarclass:'progress-bar-info'});
        this.arrayTypes.push({ 'type': '6', 'value': this.ResultService.type6, progressbarclass:'progress-bar-info-two'});
        this.arrayTypes.push({ 'type': '7', 'value': this.ResultService.type7, progressbarclass:'progress-bar-info-three'});
        this.arrayTypes.push({ 'type': '8', 'value': this.ResultService.type8, progressbarclass:'progress-bar-info-four'});
        this.sort();
    }
    predicatBy(prop) {
        return function (a, b) {
            if (a[prop] < b[prop]) {
                return 1;
            } else if (a[prop] > b[prop]) {
                return -1;
            }
            return 0;
        };
    }

    sort() {
        this.arrayTypes.sort(this.predicatBy('value'));
    }

    showDesc(title, content) {
        this.ngDialog.open({ template: '<h4 dir="rtl">' + title + '</h4><hr />'+
        '<p dir="rtl">'+content+'</p>', plain: true });
    }

    showAdvantage(title, content) {
        var temp = '<h4 dir="rtl">'+ title + '</h4><hr />'+'<ul dir="rtl">';
        angular.forEach(content,function(data){
            temp += '<li>' + data + '</li>';           
        });
        temp += '</ul>';
        this.ngDialog.open({ template: temp, plain: true });
    }

    again() {
        this.ResultService.clear();
        this.$location.path('home');
    }
}
export default ViewResult;