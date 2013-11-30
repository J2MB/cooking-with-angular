angular.module("editOnClick", [])
.directive('editOnClick', function editOnClickDirective() {
    var make = angular.element;
    return {
        restrict : "A",
        transclude: true,
        templateUrl: 'lib/edit-on-click/template.html',
        scope : {
            text : '=editOnClick'
        },
        controller : function editOnClickController($scope) {
            var ctrl = this;
            $scope.model = { text: $scope.text };
            $scope.editMode = false;
            
            $scope.startEdit = function(){
                $scope.editMode = true;
                ctrl.focus();
            };
            $scope.endEdit = function(text){
                $scope.editMode = false;
                $scope.text = text;
            };
        },
        link: function preLink(scope, element, attrs, ctrl) {
            ctrl.focus = function(){
                var input = element.children()[0].children[0]; //until I know how to $('[editinput]')
                input.focus();
            };
        }
    };
});
