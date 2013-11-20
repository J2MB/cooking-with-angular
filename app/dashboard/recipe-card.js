'use strict';

angular.module('cookingWithAngularApp')
  .directive('recipeCard', function () {
    return {
      templateUrl: 'dashboard/recipeCard.html',
      restrict: 'E',
      scope: {recipe: "="}
    };
  });
