(function() {
  'use strict';
  angular
  .module('app', [
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'form.html',
      controller: 'MainController'
    })
  })



}());
