'use strict';

angular.module('cookingWithAngularApp')
  .service('RecipeListService', function RecipeListService($resource, $q) {
      var Recipes = $resource('/app/rest/recipes/all.json');
      
      this.dashboardRecipes = Recipes.query();
      
      this.add = function(recipe) {
        this.dashboardRecipes.push(recipe);
      }

      this.getDashboardRecipe = function(id) {
          /*var promise = $q.defer();
          this.dashboardRecipes.$promise.then(function(recipes) {
              promise.resolve(recipes[id]);
          });
          return promise;*/
          
          return this.dashboardRecipes.$promise.then(function(recipes) {
              return recipes[id];
          });
      }
  });
