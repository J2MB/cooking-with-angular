'use strict';

angular.module('cookingWithAngularApp')
.directive('recipeCard', function() {
    return {
        templateUrl : 'modules/dashboard/recipeCard.html',
        restrict : 'E',
        scope : {
            recipe : "="
        }
    };
});
