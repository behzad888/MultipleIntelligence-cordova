'use strict';

// js vendor files
import angular from 'angular';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-ui-router';
import 'angular-ui/ui-bootstrap-tpls';
import 'angular-material';
import 'ng-dialog';
import 'jquery';
// import 'velocity';
// import 'angular-velocity';
// css vendor files
//import 'font-awesome/css/font-awesome.css!';
//import 'github:fyockm/bootstrap-css-only/css/bootstrap.css!';

// js app files

import './routes/routes';
import mainModule from './ng-decorators';
import './services/services';
angular.element(document).ready(function () {
    angular.bootstrap(document, [mainModule.name], {
        strictDi: true
    });
});
