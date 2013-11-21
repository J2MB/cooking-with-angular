'use strict';

angular.module('cookingWithAngularApp', [
    'ngCookies',
    'ngResource', 
    'ngRoute', 
    'ngSanitize', 
    'ngRoute', 
    'ui.bootstrap'])
.config(function($routeProvider) {

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

    $routeProvider.when('/', {
        templateUrl : 'modules/dashboard/dashboard.html',
        controller : 'DashboardController',
        resolve : {
            recipes : function(RecipeListService, $q) {
                var deferred = $q.defer();
                var callback = deferred.resolve;
                RecipeListService.getDashboardRecipes(callback);
                return deferred.promise;
            }
        }
    }).when('/recipe', {
        templateUrl : 'modules/recipe/recipe.html',
        controller : 'RecipeController',
        resolve : {
            newMode : function($q) {
                return $q.when(true);
            },
            editMode : function($q) {
                return $q.when(false);
            },
            recipe : function(RecipeListService, $q) {
                //returns a promise that resolves to a blank recipe.
                return $q.when(RecipeListService.blankRecipe());
            }
        }
    }).when('/recipe/:id', {
        templateUrl : 'modules/recipe/recipe.html',
        controller : 'RecipeController',
        resolve : {
            newMode : function($q) {
                return $q.when(false);
            },
            editMode : function($q) {
                return $q.when(false);
            },
            recipe : recipeResolver
        }
    }).when('/recipe/:id/edit', {
        templateUrl : 'modules/recipe/recipe.html',
        controller : 'RecipeController',
        resolve : {
            newMode : function($q) {
                return $q.when(false);
            },
            editMode : function($q) {
                return $q.when(true);
            },
            recipe : recipeResolver
        }
    }).otherwise({
        redirectTo : '/'
    });
});
