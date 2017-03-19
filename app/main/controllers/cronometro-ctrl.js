'use strict';
angular.module('main')
  .controller('CronometroCtrl', function($log, $scope, $interval, $ionicPopup,
              PersistenciaRegistro, $localStorage, $cordovaLocalNotification) {

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

        // Recordatorio
        if ($localStorage.recordatorio && $scope.minutos == 30) {
           var ahora = new Date().getTime();
           $cordovaLocalNotification.schedule({
             id: 1,
             title: 'Recordatorio',
             text: 'Han transcurrido 30 minutos',
             at: ahora
           }).then(function (resultado) {
           });
        }

        if ($scope.minutos == 60) {

          // Recordatorio
          if ($localStorage.recordatorio && $scope.minutos == 60) {
             var ahora = new Date().getTime();
             $cordovaLocalNotification.schedule({
               id: 1,
               title: 'Recordatorio',
               text: 'Han transcurrido 30 minutos',
               at: ahora
             }).then(function (resultado) {
             });
          }

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
      cordova.plugins.backgroundMode.enable();
      cordova.plugins.backgroundMode.setDefaults({
        title: "Control de tareas",
        text: "Cronometro activado",
        icon: 'icon'
        });
      $localStorage.contando = $scope.isContando;
      if ($localStorage.activame) {
        $cordovaLocalNotification.cancel(2).then(function (resultado) {
        });
      }
    };

    // Detiene el cronometro
    $scope.pausar = function() {
      $interval.cancel($scope.conteo);
      $scope.isContando = false;
      cordova.plugins.backgroundMode.disable();
      $localStorage.contando = $scope.isContando;
      if ($localStorage.activame) {
        $cordovaLocalNotification.schedule({
          id: 2,
          title: 'Actívame!',
          text: 'Realiza una actividad',
          every: 60
        }).then(function (resultado) {
        });
      }
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
        PersistenciaRegistro.generarFrecuenciaEstadosDeAnimo($scope.estadoDeAnimo.id);
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
