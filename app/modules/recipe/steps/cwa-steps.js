'use strict';

angular.module('cookingWithAngularApp')
  .directive('cwaSteps', function () {
    return {
      templateUrl: '/app/modules/recipe/steps/cwaSteps.html',
      restrict: 'E',
      scope: {
        steps : "="
        },
    
        controller: function($scope){
            $scope.newStep = {};
            
            $scope.addStep = function(){
                $scope.steps.push($scope.newStep);
                $scope.newStep = {};
            }
        }
    }
  });
