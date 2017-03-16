'use strict';
angular.module('main')
.filter('nombreEstadoDeAnimo', function ($localStorage) {
  return function (input) {
    var estadosDeAnimo = $localStorage.estadosDeAnimo
    var nombreEstadoDeAnimo = estadosDeAnimo[input]['nombre'];
    return nombreEstadoDeAnimo;
  };
});
