'use strict';
angular.module('main')
.controller('MenuCtrl', function ($log, $scope) {

  $log.log('Inicio controlador: MenuCtrl en modulo main:.', this);

  $scope.salir = function () {
    ionic.Platform.exitApp();
  }

});
