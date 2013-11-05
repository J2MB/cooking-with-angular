'use strict';

angular.module('cookingWithAngularApp')
  .controller('AddRecipeController', function ($scope, $location, RecipeListService) {
      $scope.recipe = 
        {
            name: "",
            imageUrl: "http://foodriot.com/wp-content/uploads/2013/06/bacon.jpg",
            servings: "",
            rating: "",
            ingredients: [],
            steps: [],
            notes: []
        };

      $scope.add = function() {
          RecipeListService.add($scope.recipe);
          $location.path("/");
      };
      
      $scope.disabled = function() {
          return $scope.recipe.ingredients.length < 2 || $scope.recipe.steps.length == 0;
      }
  });
