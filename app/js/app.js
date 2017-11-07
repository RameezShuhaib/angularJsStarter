'use strict';

angular.module('app', 
[
    'app.route', 
    'app.controller.home', 
    'app.controller.profile'
])
.run(function(){
    console.log('AngularJs Initiated');
})

.service('testdata', function(){
    this.val = function(){
        return "this is a test data";
    }
});