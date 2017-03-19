'use strict';

describe('module: main, controller: ConfiguracionCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ConfiguracionCtrl;
  beforeEach(inject(function ($controller) {
    ConfiguracionCtrl = $controller('ConfiguracionCtrl');
  }));

  it('should do something', function () {
    expect(!!ConfiguracionCtrl).toBe(true);
  });

});
