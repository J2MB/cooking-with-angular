'use strict';

angular.module('cookingWithAngularApp')
  .directive('cwaIngredients', function () {
    return {
      templateUrl: '/app/views/directives/cwaIngredients.html',
      restrict: 'E',
      scope: {
        ingredients : "="
        },
    
        controller: function($scope){
            $scope.newIngredient = {};
            
            $scope.addIngredient = function(){
                $scope.ingredients.push($scope.newIngredient);
            }
        }
    }
}
);
