'use strict';

var app = angular.module('app.controller.profile', [])
.controller('profile', ['$scope', 'testdata', function($scope, testdata){
    console.log('Profile!');
    $scope.data = testdata.val();
}]);
