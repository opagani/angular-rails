'use strict';

angular.module('popcornApp.controllers')
  .controller('MoviesController', function($scope, MoviesService) {
    //console.log("Movies controller is booting");
      $scope.movies = MoviesService.movies();

      $scope.addFavorite = function(movie) {
        movie.isFavorite = true;
      };

      $scope.removeFavorite = function(movie) {
        movie.isFavorite = false;
      };
});