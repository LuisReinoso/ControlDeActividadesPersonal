'use strict';

describe('module: main, controller: RegistrosCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var RegistrosCtrl;
  beforeEach(inject(function ($controller) {
    RegistrosCtrl = $controller('RegistrosCtrl');
  }));

  it('should do something', function () {
    expect(!!RegistrosCtrl).toBe(true);
  });

});
