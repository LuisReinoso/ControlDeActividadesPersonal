'use strict';
angular.module('main')
.controller('EstadisticasCtrl', function ($log, $scope, PersistenciaRegistro,
                                          $localStorage) {

  $log.log('Hello from your Controller: EstadisticasCtrl in module main:. This is your controller:', this);

  $scope.labelsActividad = $localStorage.etiquetasActividades;

  $scope.dataFrecuenciasActividad = $localStorage.frecuenciasActividades;
  $scope.dataTiempoHorasActividad = $localStorage.frecuenciasTiempoHoras;
  $scope.dataTiempoMinutosActividad = $localStorage.frecuenciasTiempoMinutos;

  $scope.labelsSemana = $localStorage.etiquetasSemana;
  $scope.dataFrecuenciasActividadSemana = $localStorage.frecuenciasActividadesSemana;

  $scope.labelsMes = $localStorage.etiquetasMes;
  $scope.dataFrecuenciasActividadMes = $localStorage.frecuenciasActividadesMes;

});
