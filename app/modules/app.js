'use strict';

angular.module('cookingWithAngularApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
.config(function($routeProvider) {
    
    //returns a promise that resolves to a list of recipes
    var recipeListResolver = function(RecipeListService, $q) {
        var deferred = $q.defer();
        RecipeListService.getDashboardRecipes(deferred.resolve);
        return deferred.promise;
    };

    //returns a promise that resolves to a recipe for a given id in the route
    var recipeResolver = function(RecipeListService, $route, $q) {
        var id = $route.current.params.id;
        var deferred = $q.defer();

        var callback = function(recipe) {
            if (recipe === undefined) {//more checking needed
                deferred.reject("No recipe for this id: " + id);
            } else {
                deferred.resolve(recipe);
            }
        };

        RecipeListService.getDashboardRecipe(id, callback);

        return deferred.promise;
    };
    
    //returns a promise that resolves to a blank recipe 
    var blankRecipeResolver = function($q, RecipeListService){
        return $q.when(RecipeListService.blankRecipe());    
    };   

    var flatResolver = function(value){
        //returns a promise that resolves to the value 'mode'
        return function($q){ return $q.when(value); };
    };

    $routeProvider.when('/', {
        templateUrl : 'modules/dashboard/dashboard.html',
        controller : 'DashboardController',
        resolve : {
            recipes : recipeListResolver
        }
    }).when('/recipe', {
        templateUrl : 'modules/recipe/recipe.html',
        controller : 'RecipeController',
        resolve : {
            recipe : blankRecipeResolver,
            newMode: flatResolver(true),
            editMode: flatResolver(false)
        }
    }).when('/recipe/:id', {
        templateUrl : 'modules/recipe/recipe.html',
        controller : 'RecipeController',
        resolve : {
            recipe : recipeResolver,
            newMode: flatResolver(false),
            editMode: flatResolver(false)
        }
    }).when('/recipe/:id/edit', {
        templateUrl : 'modules/recipe/recipe.html',
        controller : 'RecipeController',
        resolve : {
            recipe : recipeResolver,
            newMode: flatResolver(false),
            editMode: flatResolver(true)
        }
    }).otherwise({
        redirectTo : '/'
    });
});
