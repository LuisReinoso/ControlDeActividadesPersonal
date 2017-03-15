'use strict';

describe('module: main, service: PersistenciaRegistro', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var PersistenciaRegistro;
  beforeEach(inject(function (_PersistenciaRegistro_) {
    PersistenciaRegistro = _PersistenciaRegistro_;
  }));

  it('should do something', function () {
    expect(!!PersistenciaRegistro).toBe(true);
  });

});
