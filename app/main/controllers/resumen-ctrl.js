'use strict';
angular.module('main')
  .controller('ResumenCtrl', function($log, $scope, $localStorage) {

    $log.log('Inicio controlador: ResumenCtrl en modulo main:.', this);

    $scope.labelsActividad = $localStorage.etiquetasActividades;
    $scope.dataFrecuenciasActividad = $localStorage.frecuenciasActividades;

});
