'use strict';

angular.module('cookingWithAngularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardController'
      })
      .when('/add', {
        templateUrl: 'views/addRecipe.html',
        controller: 'AddRecipeController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
