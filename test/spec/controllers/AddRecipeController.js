'use strict';

describe('Controller: AddrecipecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('cookingWithAngularApp'));

  var AddrecipecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddrecipecontrollerCtrl = $controller('AddrecipecontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
