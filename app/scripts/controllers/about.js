'use strict';

/**
 * @ngdoc function
 * @name drunktestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the drunktestApp
 */
angular.module('drunktestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
