'use strict';

angular.module('cookingWithAngularApp')
  .controller('RecipeController', function ($scope, $location, RecipeListService, $routeParams) {
      $scope.newMode = $routeParams.id === undefined;
      $scope.editMode = $routeParams.id && $location.path().indexOf('/edit') != -1;
      
      var initRecipe = function() {
          if (!$scope.newMode) {
              return RecipeListService.dashboardRecipes[$routeParams.id];
          }
          
          return {
                name: "Fried Bacon",
                imageUrl: "http://foodriot.com/wp-content/uploads/2013/06/bacon.jpg",
                servings: "",
                rating: "",
                ingredients: [],
                steps: [],
                notes: []
            };
      }
      
      $scope.recipe = initRecipe();
      
      $scope.add = function() {
          RecipeListService.add($scope.recipe);
          $location.path("/");
      };
      
      $scope.disabled = function() {
          return $scope.recipe.ingredients.length < 2 || $scope.recipe.steps.length == 0;
      }
      
      
  });
