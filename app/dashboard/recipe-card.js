'use strict';

angular.module('cookingWithAngularApp')
  .directive('recipeCard', function () {
    return {
      templateUrl: '/app/dashboard/recipeCard.html',
      restrict: 'E',
      scope: {recipe: "="}
    };
  });
