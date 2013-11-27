'use strict';

angular.module('cookingWithAngularApp')
.directive('deleteable', function() {
    return {
        restrict : 'E',
        replace : true,
        templateUrl : 'modules/deleteable/deleteable.html',
        scope : {
            index : '=',
            list : '='
        },
        controller : function($scope) {
            $scope.remove = function(index) {
                $scope.list.splice(index, 1);
            };

            $scope.moveUp = function(index) {
                var temp = $scope.list[index];
                $scope.remove(index);
                $scope.list.splice(index - 1, 0, temp);
            };

            $scope.moveDown = function(index) {
                var temp = $scope.list[index];
                $scope.remove(index);
                $scope.list.splice(index + 1, 0, temp);
            };
        }
    };
}); 