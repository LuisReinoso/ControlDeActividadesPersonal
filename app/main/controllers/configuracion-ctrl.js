'use strict';
angular.module('main')
.controller('ConfiguracionCtrl', function ($log, $scope, $localStorage,
                                           $cordovaLocalNotification, $cordovaFile,
                                           $ionicPopup, PersistenciaRegistro) {

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

  // Exportar
  $scope.exportar = function () {

    $cordovaFile.writeFile(cordova.file.externalRootDirectory, "registros.txt", angular.toJson($localStorage.registros) , true)
      .then(function (success) {
        $ionicPopup.alert({
          title: 'Exportación',
          template: 'Exportado con exito.'
        });
      }, function (error) {
        $ionicPopup.alert({
          title: 'Exportación',
          template: error
        });
      });
    }

  // Importar
  $scope.importar = function () {

    var registros;

    $cordovaFile.readAsText(cordova.file.externalRootDirectory, "registros.txt")
      .then(function (success) {

        $scope.limpieza();
        registros = angular.fromJson(success);
        alert(registros.length);

        for (var i = 0; i < registros.length; i++) {
          alert(registros[i]);
          PersistenciaRegistro.guardarRegistro(registros[i].idActividad,
          registros[i].idEstadoDeAnimo, registros[i].descripcion,
            registros[i].fecha, registros[i].horas, registros[i].minutos,
            registros[i].segundos);

          // Estadistica
          PersistenciaRegistro.generarFrecuencia(registros[i].idActividad);
          PersistenciaRegistro.generarFrecuenciaEstadosDeAnimo(registros[i].idEstadoDeAnimo);
          PersistenciaRegistro.generarTiempoHoras(registros[i].idActividad);
          PersistenciaRegistro.generarTiempoMinutos(registros[i].idActividad);
          PersistenciaRegistro.generarFrecuenciasActividadSemana(new Date(registros[i].fecha));
          PersistenciaRegistro.generarFrecuenciasActividadMes(new Date(registros[i].fecha));

          alert("fin iterador"+i);
        }

        $ionicPopup.alert({
          title: 'Importacion',
          template: 'Datos almacenados con exito.'
        });

      }, function (error) {
        $ionicPopup.alert({
          title: 'Importacion',
          template: error
        });
      });
  }

  // Limpieza
  $scope.limpieza = function () {

    $localStorage.contadorRegistros = 0;
    $localStorage.etiquetasActividades.length = 0;
    $localStorage.frecuenciasActividades.length = 0;

    for (var i = 0; i < $localStorage.frecuenciasActividadesMes.length; i++) {
      $localStorage.frecuenciasActividadesMes[i] = 0;
    }

    for (var i = 0; i < $localStorage.frecuenciasActividadesSemana.length; i++) {
      $localStorage.frecuenciasActividadesSemana[i] = 0;
    }

    for (var i = 0; i < $localStorage.frecuenciasEstadosDeAnimo.length; i++) {
      $localStorage.frecuenciasEstadosDeAnimo[i] = 0;
    }

    $localStorage.frecuenciasTiempoHoras.length = 0;
    $localStorage.frecuenciasTiempoMinutos.length = 0;
    $localStorage.registros.length = 0;

    // Actividades
    $localStorage.actividades =
          [{
            'id': 0,
            'nombre': 'Alimentacion',
            'imagen': 'img/alimentacion.png',
            'icono' : 'ion-spoon',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 1,
            'nombre': 'Arte',
            'imagen': 'img/arte.png',
            'icono' : 'ion-android-color-palette',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 2,
            'nombre': 'Caminata',
            'imagen': 'img/caminata.png',
            'icono' : 'ion-android-walk',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 3,
            'nombre': 'Cocinar',
            'imagen': 'img/cocinar.png',
            'icono' : 'ion-ios-nutrition',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 4,
            'nombre': 'Deporte',
            'imagen': 'img/deporte.png',
            'icono' : 'ion-android-bicycle',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 5,
            'nombre': 'Descansar',
            'imagen': 'img/descansar.png',
            'icono' : 'ion-ios-body',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 6,
            'nombre': 'Escribir',
            'imagen': 'img/escribir.png',
            'icono' : 'ion-edit',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 7,
            'nombre': 'Estudiar',
            'imagen': 'img/estudiar.png',
            'icono' : 'ion-university',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 8,
            'nombre': 'Higiene',
            'imagen': 'img/higiene.png',
            'icono' : 'ion-asterisk',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 9,
            'nombre': 'Hogar',
            'imagen': 'img/hogar.png',
            'icono' : 'ion-home',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 10,
            'nombre': 'Leer',
            'imagen': 'img/leer.png',
            'icono' : 'ion-ios-book',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 11,
            'nombre': 'Meditar',
            'imagen': 'img/meditar.png',
            'icono' : 'ion-android-person',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 12,
            'nombre': 'Ocio',
            'imagen': 'img/ocio.png',
            'icono' : 'ion-bowtie',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 13,
            'nombre': 'Programar',
            'imagen': 'img/programar.png',
            'icono' : 'ion-code',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 14,
            'nombre': 'Redes sociales',
            'imagen': 'img/redesSociales.png',
            'icono' : 'ion-network',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 15,
            'nombre': 'Trabajar',
            'imagen': 'img/trabajar.png',
            'icono' : 'ion-hammer',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 16,
            'nombre': 'Viaje',
            'imagen': 'img/viaje.png',
            'icono' : 'ion-android-car',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          }
        ];

    // Estados de animo
    $localStorage.estadosDeAnimo =
          [{
            'id': 0,
            'nombre': 'Calma energia',
            'imagen': 'img/calmaEnergia.png',
            'icono' : 'ion-happy-outline',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 1,
            'nombre': 'Calma cansancio',
            'imagen': 'img/caminata.png',
            'icono' : 'ion-happy',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 2,
            'nombre': 'Tension energía',
            'imagen': 'img/tensionEnergia.png',
            'icono' : 'ion-sad-outline',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 3,
            'nombre': 'Tension cansancio',
            'imagen': 'img/tensionCansancio.png',
            'icono' : 'ion-sad',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          }
        ];

      $ionicPopup.alert({
          title: 'Limpieza',
          template: 'Se a eliminado los datos almacenados con exito.'
        });
      }, function (error) {
      $ionicPopup.alert({
          title: 'Limpieza',
          template: error
      });
  }

});
