'use strict';

angular.module('app.route', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        'templateUrl' : '../views/templates/home.html',
        'controller': 'home'
    })
    .when('/profile', {
        'templateUrl' : '../views/templates/profile.html',
        'controller': 'profile'
    })
    .when('/404', {
        'templateUrl' : '../views/404.html',
        'controller': 'home'
    })
    .otherwise({
        redirectTo: '/404'
    });
}]);