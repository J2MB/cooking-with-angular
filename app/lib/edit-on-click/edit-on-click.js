angular.module("editOnClick", [])
.directive('editOnClick', function editOnClickDirective() {
    return {
        restrict : "A",
        transclude: true,
        template: "<input type='text' ng-show='editMode' ng-model='model.text' ng-blur='endEdit()'><span ng-hide='editMode' ng-click='startEdit()'>{{text}}</span>",
        scope : {
            text : '=editOnClick'
        },
        controller : function editOnClickController($scope, $timeout) {
            var ctrl = this;
            $scope.model = { text: $scope.text };
            $scope.editMode = false;
            
            $scope.startEdit = function editOnClickStartEdit(){
                $scope.editMode = true;
                $scope.model.text = $scope.text;
                 //need ctrl.focus() to execute after dom changes.
                $timeout(ctrl.focus, 1);
            };
            $scope.endEdit = function editOnClickEndEdit(){
                if(text.length > 0){$scope.text = $scope.model.text;}
                $scope.editMode = false;
            };
        },
        link: function editOnClickPreLink(scope, element, attrs, ctrl) {
            var input = element.find("input");
            input.on('keypress',function(event){
                if(event.keyCode == 13 && this.value.length > 0){this.blur();}
            });
            ctrl.focus = function(){input[0].focus();};
        }
    };
});
