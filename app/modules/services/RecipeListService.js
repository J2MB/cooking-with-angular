'use strict';

angular.module('cookingWithAngularApp')
  .service('RecipeListService', function RecipeListService($resource, $q) {
      var Recipes = $resource('/app/rest/recipes/all.json');
      
      var request = Recipes.query();
      this.promise = request.$promise;
      
      this.addRecipe = function(recipe) {
          this.promise.then(function(data){
            data.push(recipe);
            return data;
          });
      };
      
      this.getDashboardRecipes = function(callback){
          this.promise.then(callback);
      };
      
      this.getDashboardRecipe = function(id, callback) {
         this.promise.then(function(recipes){
            var recipe = recipes[id];
            callback(recipe);
         });
      };
  });
