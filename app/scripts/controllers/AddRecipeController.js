'use strict';

angular.module('cookingWithAngularApp')
  .controller('AddRecipeController', function ($scope, RecipeListService) {
      $scope.recipe = 
        {
            name: "",
            imageUrl: "",
            servings: "",
            rating: "",
            ingredients: [{
                quantity: 1,
                description: 'bacon',
                unit: 'bacon'
            }],
            steps: [],
            notes: []
        };

      $scope.add = function() {
          RecipeListService.add($scope.recipe);
      };
  });
