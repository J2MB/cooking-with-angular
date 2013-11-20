'use strict';

angular.module('cookingWithAngularApp')
  .controller('DashboardController', function ($scope, $location, recipes) {
      
     $scope.dashboardRecipes = recipes;
     
     $scope.go = function(path){
        $location.path(path);
    };
  });