'use strict';
angular.module('main')
.filter('nombreIconoActividad', function ($localStorage) {
  return function (input) {
    var actividades = $localStorage.actividades
    var nombreIconoActividad = actividades[input]['icono'];
    return nombreIconoActividad;
  };
});
