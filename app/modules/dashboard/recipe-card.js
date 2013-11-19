'use strict';

angular.module('cookingWithAngularApp')
  .directive('recipeCard', function () {
    return {
      templateUrl: '/app/modules/dashboard/recipeCard.html',
      restrict: 'E',
      scope: {recipe: "="}
    };
  });
