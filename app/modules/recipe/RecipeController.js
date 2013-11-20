'use strict';

angular.module('cookingWithAngularApp')
  .controller('RecipeController', function ($scope, $location, RecipeListService, $routeParams, recipe) {
      $scope.newMode = $routeParams.id === undefined;
      $scope.editMode = $routeParams.id && $location.path().indexOf('/edit') != -1;
      $scope.recipe = recipe;
      
      $scope.addRecipe = function(recipe) {
          RecipeListService.addRecipe(recipe);
          $location.path("/");
      };
      
      $scope.disabled = function() {
          return $scope.recipe.ingredients.length < 2 || $scope.recipe.steps.length == 0;
      };
  });
