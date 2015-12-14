(function() {
  'use strict';
  angular
  .module('app')
    .factory('MainService', function($http) {


      var newUser = function(user) {
        var url = '/new-user';
        return $http.post(url, user);
      };

      var findAll = function() {
        var url = '/data';
        return $http.get(url);
      };

      var venueStuff = function() {
        var url ='http://venuesintown.herokuapp.com/trackedVenues';
        return $http.get(url);
      };

      return {
        newUser: newUser,
        findAll: findAll,
        venueStuff: venueStuff
      };

    });
}());
