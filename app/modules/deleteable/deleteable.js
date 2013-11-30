'use strict';

angular.module('cookingWithAngularApp')
.directive('deleteable', function($animate) {
    return {
        restrict: 'EA',
        transclude: true,
        templateUrl: 'modules/deleteable/deleteable.html',
        scope: {
            list: '=',
            index: '='
        },
        link: function preLink($scope, element, attrs, controller){ // no D.I. here.
            
            var list = $scope.list;
            var remove = function(index) {
                list.splice(index, 1);
            };
            $scope.remove = remove;

            $scope.moveUp = function(index) {
                if (index <= 0){ return; }
                var temp = list[index];
                remove(index);
                list.splice(index - 1, 0, temp);
            };

            $scope.moveDown = function(index) {
                var temp = list[index];
                remove(index);
                list.splice(index + 1, 0, temp);
            };
        }
    };
}); 