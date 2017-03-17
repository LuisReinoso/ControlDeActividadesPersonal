'use strict';

describe('module: main, controller: EstadisticasCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var EstadisticasCtrl;
  beforeEach(inject(function ($controller) {
    EstadisticasCtrl = $controller('EstadisticasCtrl');
  }));

  it('should do something', function () {
    expect(!!EstadisticasCtrl).toBe(true);
  });

});
