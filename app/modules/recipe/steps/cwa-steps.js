'use strict';

angular.module('cookingWithAngularApp')
.directive('cwaSteps', function() {
    return {
        templateUrl : 'modules/recipe/steps/steps.html',
        restrict : 'E',
        scope : {
            steps : "="
        },
        controller : function($scope) {
            $scope.newStep = {};

            $scope.addStep = function() {
                $scope.steps.push($scope.newStep);
                $scope.newStep = {};
            };
        }
    };
});
