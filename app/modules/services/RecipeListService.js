'use strict';

angular.module('cookingWithAngularApp')
  .service('RecipeListService', function RecipeListService($resource, $q) {
      var Recipes = $resource('/app/rest/recipes/all.json');
      
      var request = Recipes.query();
      this.promise = request.$promise;
      
      this.addRecipe = function(recipe) { //this is kinda dumb now. but it works!
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
