(function() {
  'use strict';
  angular
  .module('app')
    .controller('MainController', function($scope, MainService) {

      var seeUsers = function() {
        MainService.findAll().success(function(data) {
          $scope.users = data;
          console.log(data);
        });
      };

      seeUsers();

      $scope.submit = function(user) {
        MainService.newUser(user).success(function() {
          seeUsers();
        });
      };
    })


}());
