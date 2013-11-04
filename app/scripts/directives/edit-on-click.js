new function(){
var make = angular.element;

var edit = angular.module("editOnClick", []);
edit.directive('editOnClick', function editOnClickDirective(){
return {

//Begin directive

restrict: "A",
replace: false,
scope: {
    editOnClick:'='
},
controller: function editOnClickController($scope)
{$scope.editText = $scope.editOnClick;},

compile: function editOnClickCompile(tElement, tAttrs, transclude)
{
    var tType = tElement[0].tagName.toLowerCase();
    var tDisplayStyle = getComputedStyle(tElement[0], null).display;
    var myElem = make("<span editBlock class='noEdit'></span>");
    var input = make("<input type='text' ng-model='editText' editInput style='display:"+tDisplayStyle+"'>");
    var displayElem = make("<"+tType+" editContent>{{editOnClick}}</"+tType+">");
    myElem.append(input);
    myElem.append(displayElem);
    tElement.replaceWith(myElem);

    //link
    return function(scope, element, attrs)
    {
        var input = make(element.children()[0]);
        var displayElem = make(element.children()[1]);

        displayElem.on('click', function editOnClickDisplayElemClicked(event){
            element.toggleClass("doEdit").toggleClass("noEdit");
            scope.editText = scope.editOnClick;
            scope.$apply();
            input[0].focus();
        });
        input.on('blur',function editOnClickInputBlurred(event){
            element.toggleClass("doEdit").toggleClass("noEdit");
            scope.editOnClick = scope.editText;
            scope.$apply();
        });
        input.on('keypress',function editOnClickInputKeyPressed(event){
            if(event.keyCode == 13){this.blur();}
        });
    };
}

//End directive

}
});

}();