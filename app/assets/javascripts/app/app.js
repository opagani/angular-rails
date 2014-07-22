'use strict';

angular.module('popcornApp', ['ngRoute', 'popcornApp.controllers', 'popcornApp.services'])
  .config(function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/movie/:movie_id', 
          {
            templateUrl: '/templates/movie.html', 
            controller: 'MovieController'
          })
        .when('/', 
          {
            templateUrl: '/templates/movies.html',
            controller: 'MoviesController'
          })
        .when('/login', 
          {
            templateUrl: '/templates/login.html', 
            controller: 'LoginController'
          })
        .otherwise({redirectTo: '/'});
      $locationProvider.html5Mode(true);
  });