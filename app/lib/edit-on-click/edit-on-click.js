angular.module("editOnClick", [])
.directive('editOnClick', function editOnClickDirective($animate, $timeout) {
    return {
        restrict : "A",
        replace: false,
        templateUrl: 'lib/edit-on-click/template.html',
        scope : {
            text : '=editOnClick'
        },
        controller : function editOnClickController($scope) {
            var ctrl = this;
            $scope.model = { text: $scope.text };
            $scope.editMode = false;
            
            $scope.startEdit = function editOnClickStartEdit(text){
                $scope.editMode = true;
                $scope.model.text = text;
                $timeout(ctrl.focusInput, 0);//need ctrl.focus() to execute after dom changes.
            };
            $scope.endEdit = function editOnClickEndEdit(text){
                $scope.editMode = false;
                if(text.length > 0){ $scope.text = text; }
            };
        },
        link: function editOnClickPreLink(scope, element, attrs, ctrl) {
            $animate.enabled(false, element);
            var getInput = function(){
                return element.find("input")[0];
            };
            ctrl.focusInput = function(){getInput().focus();};
            
            scope.handleEnter = function(event){
                input = getInput();
                if(event.keyCode == 13 && input.value.length > 0){
                    $timeout(function(){ input.blur(); }, 0);
                }
            };
        }
    };
});
