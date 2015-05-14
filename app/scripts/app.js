'use strict';

/**
 * @ngdoc overview
 * @name drunktestApp
 * @description
 * # drunktestApp
 *
 * Main module of the application.
 */
angular
  .module('drunktestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
