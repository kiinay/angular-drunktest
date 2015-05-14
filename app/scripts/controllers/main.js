'use strict';

/**
 * @ngdoc function
 * @name drunktestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the drunktestApp
 */

angular.module('drunktestApp')
  .controller('MainCtrl', function () {
    var go = {
      value: false
    };

    this.start = go;
  });

/*
var checkboxModel = {
  stay: false
};

console.log(checkboxModel.stay);

it('should go to the drunktest', function() {
  var stay = element(by.binding('checkboxModel.stay'));

  expect(stay.getText()).toContain('false');

  element(by.model('checkboxModel.stay')).click();

  expect(stay.getText()).toContain('true');

  console.log(checkboxModel.stay);
});*/
