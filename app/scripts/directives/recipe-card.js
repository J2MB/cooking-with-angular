'use strict';

angular.module('cookingWithAngularApp')
  .directive('recipeCard', function () {
    return {
      templateUrl: '/app/views/directives/recipeCard.html',
      restrict: 'E',
      scope: {recipe: "="}
    };
  });
