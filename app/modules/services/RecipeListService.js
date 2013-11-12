'use strict';

angular.module('cookingWithAngularApp')
  .service('RecipeListService', function RecipeListService() {
      this.dashboardRecipes = [
            {
                name: "Mac and cheese",
                imageUrl: "http://du.cx/BrC",
                servings: "3 men",
                rating: "3",
                ingredients: [
                    {
                        quantity: "3",
                        unit: "cups",
                        description: "milk"
                    },
                    {
                        quantity: "1",
                        unit: "tsp",
                        description: "vanilla"
                    },
                    {
                        quantity: "3",
                        unit: "tbsp",
                        description: "sugar"
                    }
                ],
                steps: [
                    {description: "get glass"},
                    {description: "pour milk"},
                    {description: "add vanilla and sugar"},
                    {description: "mix"},
                    {description: "drink"}
                ]
            }
      ];
      
      this.add = function(recipe) {
        this.dashboardRecipes.push(recipe);
      }
  });
