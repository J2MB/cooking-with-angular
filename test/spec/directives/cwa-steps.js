'use strict';

describe('Directive: cwaSteps', function () {

  // load the directive's module
  beforeEach(module('cookingWithAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cwa-steps></cwa-steps>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cwaSteps directive');
  }));
});
