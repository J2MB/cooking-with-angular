angular.module("editOnClick", [])
.directive('editOnClick', function editOnClickDirective() {
    return {
        restrict : "A",
        transclude: true,
        templateUrl: 'lib/edit-on-click/template.html',
        scope : {
            text : '=editOnClick'
        },
        controller : function editOnClickController($scope, $timeout) {
            var ctrl = this;
            $scope.model = { text: $scope.text };
            $scope.editMode = false;
            
            $scope.startEdit = function(){
                $scope.editMode = true;
                
                 //not proud of using $timeout. need ctrl.focus() to execute after dom changes.
                $timeout(ctrl.focus, 100);
            };
            $scope.endEdit = function(text){
                $scope.editMode = false;
                $scope.text = text;
            };
        },
        link: function editOnClickPreLink(scope, element, attrs, ctrl) {
            ctrl.focus = function(){
                var input = element.children()[0].children[0]; //until I know how to $('[editinput]')
                input = angular.element(input)[0];
                input.focus();
            };
        }
    };
});
