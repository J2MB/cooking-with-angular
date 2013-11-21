'use strict';

angular.module('cookingWithAngularApp')
  .controller('RecipeController', function ($scope, $location, RecipeListService, recipe, newMode, editMode) {
      $scope.newMode = newMode;
      $scope.editMode = editMode;
      $scope.recipe = recipe;
      
      $scope.addRecipe = function(recipe) {
          RecipeListService.addRecipe(recipe);
          $location.path("/");
      };
      
      $scope.saveRecipe = function(recipe){
          $location.path("/");
      };
      
      $scope.disabled = function() {
          return recipe.ingredients.length < 2 || recipe.steps.length == 0;
      };
  });
