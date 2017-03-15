'use strict';
angular.module('main')
  .controller('CronometroCtrl', function($log, $scope, $interval, $ionicPopup,
              PersistenciaRegistro) {

    $log.log('Inicio controlador: CronometroCtrl en modulo main:.', this);

    $scope.horas = 0;
    $scope.minutos = 0;
    $scope.segundos = 0;
    $scope.isContando = false;
    $scope.isContador = false;

    localforage.getItem('actividades').then(function(value) {
      // TODO: ordenar por mayor uso
      $scope.actividades = value;
      $scope.actividad = $scope.actividades[0]; // default
    });

    localforage.getItem('estadosDeAnimo').then(function(value) {
      // TODO: ordenar por mayor uso
      $scope.estadosDeAnimo = value;
      $scope.estadoDeAnimo = $scope.estadosDeAnimo[0]; // default
    });

    // Funcion que aumenta cada segundo el contador
    function segundos() {
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
    $scope.iniciar = function() {
      $scope.conteo = $interval(segundos, 1000);
      $scope.isContando = true;
      $scope.isContador = true;
    };

    // Detiene el cronometro
    $scope.pausar = function() {
      $interval.cancel($scope.conteo);
      $scope.isContando = false;
    }

    // Marcar actividad
    $scope.marcar = function () {

      $scope.pausar();

      // Descripcion
      $ionicPopup.prompt({
        title: 'Descripcion opcional del evento',
        subTitle: 'Breve descripcion del evento',
        inputType: 'text'
      }).then(function (descripcion) {

        $log.log('Guardando registro', this);
        PersistenciaRegistro.guardarRegistro($scope.actividad.id,
        $scope.estadoDeAnimo.id, descripcion, new Date());
        limpieza();
      });
    }

    // Limpieza interfaz
    $scope.limpieza = function() {
      limpieza();
    }

    function limpieza() {
      $scope.horas = 0;
      $scope.minutos = 0;
      $scope.segundos = 0;
      $scope.isContando = false;
      $scope.isContador = false;
    }

    // Selector Actividad
    $scope.selectorActividad = function(actividad) {
        $scope.actividad = actividad;
    }

    // Selector estado de animo
    $scope.selectorEstadoDeAnimo = function(estadoDeAnimo) {
        $scope.estadoDeAnimo = estadoDeAnimo;
    }

  });
