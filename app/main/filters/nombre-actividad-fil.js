'use strict';
angular.module('main')
.filter('nombreActividad', function ($localStorage) {
  return function (input) {
    var actividades = $localStorage.actividades
    var nombreActividad = actividades[input]['nombre'];
    return nombreActividad;
  };
});
