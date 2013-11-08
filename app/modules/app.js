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
        templateUrl: 'dashboard/dashboard.html',
        controller: 'DashboardController'
      })
      .when('/add', {
        templateUrl: 'addRecipe/addRecipe.html',
        controller: 'AddRecipeController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
