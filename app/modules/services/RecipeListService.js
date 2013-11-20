'use strict';

angular.module('cookingWithAngularApp')
  .service('RecipeListService', function RecipeListService($resource, $q) {
      var Recipes = $resource('/app/rest/recipes/all.json');
      
      var request = Recipes.query(),
          recipes;
      this.promise = request.$promise;
      this.promise.then(function(data){
          recipes = data;
      });
      
      this.add = function(recipe) {
        recipes.push(recipe);
      };
      
      this.getRecipes = function(){
          return recipes;
      };

      this.getDashboardRecipe = function(id, callback) {
         this.promise.then(function(data){
            var recipe = recipes[id];
            callback(recipe);
         });
      };
  });
