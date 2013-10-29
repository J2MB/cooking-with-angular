'use strict';

describe('Service: RecipeListService', function () {

  // load the service's module
  beforeEach(module('cookingWithAngularApp'));

  // instantiate service
  var RecipeListService;
  beforeEach(inject(function (_RecipeListService_) {
    RecipeListService = _RecipeListService_;
  }));

  it('should do something', function () {
    expect(!!RecipeListService).toBe(true);
  });

});
