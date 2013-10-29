'use strict';

angular.module('cookingWithAngularApp')
  .service('RecipeListService', function RecipeListService() {
      this.dashboardRecipes = [
            {
                name: "Mac and cheese",
                imageUrl: "http://du.cx/BrC",
                servings: "3 men",
                rating: "3"
            }
      ];
      
      this.add = function(recipe) {
        dashboardRecipes.push(recipe);
      }
      
      // TODO: Delete n stuff
          
  });
