'use strict';
angular.module('main')
.filter('nombreIconoEstado', function ($localStorage) {
  return function (input) {
    var estadosDeAnimo = $localStorage.estadosDeAnimo;
    var nombreIconoEstado = estadosDeAnimo[input]['icono'];
    return nombreIconoEstado;
  };
});
