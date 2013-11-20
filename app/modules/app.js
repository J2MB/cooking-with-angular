angular.module('cookingWithAngularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
    'ngRoute',
  'ui.bootstrap'
])
.config(function ($routeProvider) {
  
$routeProvider.when('/', {
    template: 'dashboard/dashboard.html',
    controller: 'DashboardController'
  })
  
  /*
  .when('/recipe', {
    templateUrl: 'recipe/recipe.html',
    controller: 'RecipeController'
  })
  .when('/recipe/:id', {
    templateUrl: 'recipe/recipe.html',
    controller: 'RecipeController'
  })
  .when('/recipe/:id/edit', {
    templateUrl: 'recipe/recipe.html',
    controller: 'RecipeController'
  })*/
  .otherwise({
    redirectTo: '/'
  });
});
