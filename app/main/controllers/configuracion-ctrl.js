'use strict';
angular.module('main')
.controller('ConfiguracionCtrl', function ($log, $scope, $localStorage,
                                           $cordovaLocalNotification) {

  $log.log('Hello from your Controller: ConfiguracionCtrl in module main:. This is your controller:', this);

  $scope.recordatorio30 = $localStorage.recordatorio;
  $scope.recordatorioActivame = $localStorage.activame;

  $scope.cambioRecordatorio30 = function (boolean) {
    $localStorage.recordatorio = boolean;
  }

  $scope.cambioRecordatorioActivame = function (boolean) {
    $localStorage.activame = boolean;

    if ($localStorage.activame && !$localStorage.contando) {
      $cordovaLocalNotification.schedule({
        id: 2,
        title: 'Actívame!',
        text: 'Registra una actividad',
        every: 60,
      }).then(function (resultado) {
      });
    } else {
      $cordovaLocalNotification.cancel(2).then(function (resultado) {
      });
    }
  }
});
