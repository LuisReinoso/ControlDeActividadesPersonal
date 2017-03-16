'use strict';
angular.module('main')
.controller('RegistrosCtrl', function ($log, $scope, $state, $localStorage) {

  $log.log('Inicio controlador: RegistrosCtrl en modulo main:.', this);
  $scope.registros = $localStorage.registros;

});
