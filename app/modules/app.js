'use strict';

angular.module('cookingWithAngularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
    'ngRoute',
  'ui.bootstrap'
])
.config(function ($routeProvider) {
  
$routeProvider.when('/', {
    templateUrl: 'modules/dashboard/dashboard.html',
    controller: 'DashboardController'
  })
  .when('/recipe', {
    templateUrl: 'modules/recipe/recipe.html',
    controller: 'RecipeController'
  })
  .when('/recipe/:id', {
    templateUrl: 'modules/recipe/recipe.html',
    controller: 'RecipeController'
  })
  .when('/recipe/:id/edit', {
    templateUrl: 'modules/recipe/recipe.html',
    controller: 'RecipeController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
