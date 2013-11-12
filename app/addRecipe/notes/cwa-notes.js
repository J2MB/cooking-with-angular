'use strict';

angular.module('cookingWithAngularApp')
  .directive('cwaNotes', function () {
    return {
      templateUrl: '/app/addRecipe/notes/cwaNotes.html',
      restrict: 'E',
      scope: {
        notes : "="
        },
    
        controller: function($scope){
            $scope.newNote = {};
            
            $scope.addNote = function(){
                $scope.notes.push($scope.newNote);
                $scope.newNote = {};
            }
        }
    }
  });
