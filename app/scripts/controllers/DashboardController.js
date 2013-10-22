'use strict';

angular.module('cookingWithAngularApp')
  .controller('DashboardController', function ($scope) {
    $scope.dashboardRecipes = [
        {
            name: "Mac and cheese",
            imageUrl: "http://du.cx/BrC",
            servings: "3 men",
            rating: "3"
        }
    ];
  });