'use strict';

describe('Directive: cwaIngredients', function () {

  // load the directive's module
  beforeEach(module('cookingWithAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cwa-ingredients></cwa-ingredients>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cwaIngredients directive');
  }));
});
