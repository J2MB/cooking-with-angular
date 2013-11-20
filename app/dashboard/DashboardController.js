'use strict';

angular.module('cookingWithAngularApp')
  .controller('DashboardController', function ($scope, $location, RecipeListService) {
    $scope.dashboardRecipes = RecipeListService.dashboardRecipes;
      
     $scope.go = function(path){
        $location.path(path);
    };
  });