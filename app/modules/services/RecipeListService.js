'use strict';

angular.module('cookingWithAngularApp')
  .service('RecipeListService', function RecipeListService($resource) {
      var Recipes = $resource('rest/recipes/all.json');
      var request = Recipes.query();
      var promise = request.$promise;
      
      this.addRecipe = function(recipe) { //this is kinda dumb now. but it works!
          promise.then(function(data){
            data.push(recipe);
            return data;
          });
      };
      
      this.getDashboardRecipes = promise.then; // lol, too simple.
      
      this.getDashboardRecipe = function(id, callback) {
         promise.then(function(recipes){
            var recipe = recipes[id];
            callback(recipe);
         });
      };
      
      this.blankRecipe = function(){
        return {
            name: "Fried Bacon",
            imageUrl: "http://foodriot.com/wp-content/uploads/2013/06/bacon.jpg",
            servings: "",
            rating: "",
            ingredients: [],
            steps: [],
            notes: []
        };
      };
  });
