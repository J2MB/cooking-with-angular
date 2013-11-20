'use strict';

angular.module('cookingWithAngularApp')
  .service('RecipeListService', function RecipeListService($resource) {
      var Recipes = $resource('../test/rest/recipes/all.json');
      this.dashboardRecipes = Recipes.query();
      
      this.add = function(recipe) {
        this.dashboardRecipes.push(recipe);
      }
  });
