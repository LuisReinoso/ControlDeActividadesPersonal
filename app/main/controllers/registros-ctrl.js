'use strict';
angular.module('main')
.controller('RegistrosCtrl', function ($log, $scope, $state, $localStorage,
                                      PersistenciaRegistro) {
  $log.log('Inicio controlador: RegistrosCtrl en modulo main:.', this);
  $scope.registros = $localStorage.registros;

  $scope.eliminarRegistro = function (indice) {
    PersistenciaRegistro.eliminarRegistro(indice);
  };
});
