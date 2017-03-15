'use strict';

describe('module: main, controller: CronometroCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var CronometroCtrl;
  beforeEach(inject(function ($controller) {
    CronometroCtrl = $controller('CronometroCtrl');
  }));

  it('should do something', function () {
    expect(!!CronometroCtrl).toBe(true);
  });

});
