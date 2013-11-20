'use strict';

angular.module('cookingWithAngularApp')
  .controller('DashboardController', function ($scope, $location, RecipeListService) {
      
    RecipeListService.promise.then(function(){
        $scope.dashboardRecipes = RecipeListService.getRecipes();
    });
     
     $scope.go = function(path){
        $location.path(path);
    };
  });