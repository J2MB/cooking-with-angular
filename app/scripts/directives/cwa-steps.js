'use strict';

angular.module('cookingWithAngularApp')
  .directive('cwaSteps', function () {
    return {
      templateUrl: '/app/views/directives/cwaSteps.html',
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
