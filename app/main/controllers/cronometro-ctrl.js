'use strict';
angular.module('main')
.controller('CronometroCtrl', function ($log, $scope, $interval) {

  $log.log('Inicio controlador: CronometroCtrl en modulo main:.', this);

  $scope.horas = 0;
  $scope.minutos = 0;
  $scope.segundos = 0;
  $scope.isContando = false;

  // Funcion que aumenta cada segundo el contador
  function segundos () {
    $scope.segundos = $scope.segundos + 1;
    if ($scope.segundos == 60) {
      $scope.segundos = 0;
      $scope.minutos = $scope.minutos + 1;
      if ($scope.minutos == 60) {
        $scope.minutos = 0;
        $scope.horas = $scope.horas + 1;
      }
    }
  }

  // Inicia el cronometro
  $scope.iniciar = function () {
    $scope.conteo = $interval(segundos, 1000);
    $scope.isContando = true;
  };

  // Detiene el cronometro
  $scope.pausar = function () {
    $interval.cancel($scope.conteo);
    $scope.isContando = false;
  }

});
