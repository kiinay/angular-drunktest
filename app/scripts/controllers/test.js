'use strict';

/**
 * @ngdoc function
 * @name drunktestApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the drunktestApp
 */

angular.module('drunktestApp')
  .controller('TestCtrl', function () {
    var questions = [
      { question: 'Dans une course à pieds, je double le 2ème ! Je suis donc :', propose: ['Dernier', 'Troisième', 'Premier'], answer: 'Premier'},
      { question: 'Dans une course à pieds, je double le 2ème ! Je suis donc :', propose: ['Dernier', 'Troisième', 'Premier'], answer: 'Premier'},
      { question: 'Dans une course à pieds, je double le 2ème ! Je suis donc :', propose: ['Dernier', 'Troisième', 'Premier'], answer: 'Premier'}
    ];

    var go = {
      value: false
    };

    this.listeQuestions = questions;

    this.next = go;
  });
