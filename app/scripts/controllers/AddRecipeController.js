'use strict';

angular.module('cookingWithAngularApp')
  .controller('AddRecipeController', function ($scope, RecipeListService) {
      $scope.recipe = 
        {
            name: "",
            imageUrl: "http://foodriot.com/wp-content/uploads/2013/06/bacon.jpg",
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
