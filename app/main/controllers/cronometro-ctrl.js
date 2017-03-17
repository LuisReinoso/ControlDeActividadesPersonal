'use strict';
angular.module('main')
  .controller('CronometroCtrl', function($log, $scope, $interval, $ionicPopup,
              PersistenciaRegistro, $localStorage) {

    $log.log('Inicio controlador: CronometroCtrl en modulo main:.', this);

    $scope.horas = 0;
    $scope.minutos = 0;
    $scope.segundos = 0;
    $scope.isContando = false;
    $scope.isContador = false;

    // TODO: ordenar por mayor uso
    $scope.actividades = $localStorage.actividades;
    $scope.actividad = $localStorage.actividades[0]; //default

    // TODO: ordenar por mayor uso
    $scope.estadosDeAnimo = $localStorage.estadosDeAnimo;
    $scope.estadoDeAnimo = $localStorage.estadosDeAnimo[0]; //default

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

        var fecha = new Date();
        $log.log('Guardando registro', this);
        PersistenciaRegistro.guardarRegistro($scope.actividad.id,
        $scope.estadoDeAnimo.id, descripcion, fecha,
        $scope.horas, $scope.minutos, $scope.segundos);
        limpieza();

        // Estadistica
        PersistenciaRegistro.generarFrecuencia($scope.actividad.id);
        PersistenciaRegistro.generarTiempoHoras($scope.actividad.id);
        PersistenciaRegistro.generarTiempoMinutos($scope.actividad.id);
        PersistenciaRegistro.generarFrecuenciasActividadSemana(fecha);
        PersistenciaRegistro.generarFrecuenciasActividadMes(fecha);
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
