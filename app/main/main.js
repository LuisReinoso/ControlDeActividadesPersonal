'use strict';
angular
  .module('main', ['ionic', 'ngCordova', 'ui.router', 'ngStorage', 'chart.js'])
  .config(function ($stateProvider, $urlRouterProvider) {

    // ROUTING with ui.router
    $urlRouterProvider.otherwise('/main/resumen');
    $stateProvider
      // this state is placed in the <ion-nav-view> in the index.html
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main/templates/menu.html',
        controller: 'MenuCtrl as menu'
      })
      .state('main.resumen', {
        url: '/resumen',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/resumen.html',
            controller: 'ResumenCtrl as ctrl'
          }
        }
      })
      .state('main.cronometro', {
        url: '/cronometro',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/cronometro.html',
            controller: 'CronometroCtrl as ctrl'
          }
        }
      })
      .state('main.registros', {
        url: '/registros',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/registros.html',
            controller: 'RegistrosCtrl as ctrl'
          }
        }
      })
      .state('main.estadisticas', {
        url: '/estadisticas',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/estadisticas.html',
            controller: 'EstadisticasCtrl as ctrl'
          }
        }
      })
      .state('main.configuracion', {
        url: '/configuracion',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/configuracion.html',
            controller: 'ConfiguracionCtrl as ctrl'
          }
        }
      });
  })
  .run(function ($localStorage) {

    // Actividades
    $localStorage.actividades = $localStorage.actividades || [{
      'id': 0,
      'nombre': 'Alimentacion',
      'imagen': 'img/alimentacion.png',
      'icono': 'ion-spoon',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }, {
      'id': 1,
      'nombre': 'Arte',
      'imagen': 'img/arte.png',
      'icono': 'ion-android-color-palette',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }, {
      'id': 2,
      'nombre': 'Caminata',
      'imagen': 'img/caminata.png',
      'icono': 'ion-android-walk',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }, {
      'id': 3,
      'nombre': 'Cocinar',
      'imagen': 'img/cocinar.png',
      'icono': 'ion-ios-nutrition',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }, {
      'id': 4,
      'nombre': 'Deporte',
      'imagen': 'img/deporte.png',
      'icono': 'ion-android-bicycle',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }, {
      'id': 5,
      'nombre': 'Descansar',
      'imagen': 'img/descansar.png',
      'icono': 'ion-ios-body',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }, {
      'id': 6,
      'nombre': 'Escribir',
      'imagen': 'img/escribir.png',
      'icono': 'ion-edit',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }, {
      'id': 7,
      'nombre': 'Estudiar',
      'imagen': 'img/estudiar.png',
      'icono': 'ion-university',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }, {
      'id': 8,
      'nombre': 'Higiene',
      'imagen': 'img/higiene.png',
      'icono': 'ion-asterisk',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }, {
      'id': 9,
      'nombre': 'Hogar',
      'imagen': 'img/hogar.png',
      'icono': 'ion-home',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }, {
      'id': 10,
      'nombre': 'Leer',
      'imagen': 'img/leer.png',
      'icono': 'ion-ios-book',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }, {
      'id': 11,
      'nombre': 'Meditar',
      'imagen': 'img/meditar.png',
      'icono': 'ion-android-person',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }, {
      'id': 12,
      'nombre': 'Ocio',
      'imagen': 'img/ocio.png',
      'icono': 'ion-bowtie',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }, {
      'id': 13,
      'nombre': 'Programar',
      'imagen': 'img/programar.png',
      'icono': 'ion-code',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }, {
      'id': 14,
      'nombre': 'Redes sociales',
      'imagen': 'img/redesSociales.png',
      'icono': 'ion-network',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }, {
      'id': 15,
      'nombre': 'Trabajar',
      'imagen': 'img/trabajar.png',
      'icono': 'ion-hammer',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }, {
      'id': 16,
      'nombre': 'Viaje',
      'imagen': 'img/viaje.png',
      'icono': 'ion-android-car',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }];

    // Estados de animo
    $localStorage.estadosDeAnimo = $localStorage.estadosDeAnimo || [{
      'id': 0,
      'nombre': 'Calma energia',
      'imagen': 'img/calmaEnergia.png',
      'icono': 'ion-happy-outline',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }, {
      'id': 1,
      'nombre': 'Calma cansancio',
      'imagen': 'img/caminata.png',
      'icono': 'ion-happy',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }, {
      'id': 2,
      'nombre': 'Tension energía',
      'imagen': 'img/tensionEnergia.png',
      'icono': 'ion-sad-outline',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }, {
      'id': 3,
      'nombre': 'Tension cansancio',
      'imagen': 'img/tensionCansancio.png',
      'icono': 'ion-sad',
      'contador': 0,
      'horas': 0,
      'minutos': 0,
      'segundos': 0
    }];

    // Contador de Registros
    $localStorage.contadorRegistros = $localStorage.contadorRegistros || 0;

    // Registros
    $localStorage.registros = $localStorage.registros || [];

    // Etiquetas actividades
    $localStorage.etiquetasActividades = $localStorage.etiquetasActividades || [];

    // Frecuencia actividades
    $localStorage.frecuenciasActividades = $localStorage.frecuenciasActividades || [];

    // Etiquetas estados de animo
    $localStorage.etiquetasEstadosDeAnimo = $localStorage.etiquetasEstadosDeAnimo || ['Calma energia', 'Calma cansancio', 'Tension energía', 'Tension cansancio'];

    // Frecuencia actividades
    $localStorage.frecuenciasEstadosDeAnimo = $localStorage.frecuenciasEstadosDeAnimo || [0, 0, 0, 0];

    // Frecuencia tiempo horas
    $localStorage.frecuenciasTiempoHoras = $localStorage.frecuenciasTiempoHoras || [];

    // Frecuencia tiempo minutos
    $localStorage.frecuenciasTiempoMinutos = $localStorage.frecuenciasTiempoMinutos || [];

    // Dias de la semana
    $localStorage.etiquetasSemana = $localStorage.etiquetasSemana || [
      'domingo',
      'lunes',
      'martes',
      'miercoles',
      'jueves',
      'viernes',
      'sabado'
    ];

    // Dias de la semana
    $localStorage.frecuenciasActividadesSemana = $localStorage.frecuenciasActividadesSemana || [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];

    // Nombre de la meses
    $localStorage.etiquetasMes = $localStorage.etiquetasMes || [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre'
    ];

    // Dias de la semana
    $localStorage.frecuenciasActividadesMes = $localStorage.frecuenciasActividadesMes || [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];

    // Configuracion
    $localStorage.recordatorio = $localStorage.recordatorio || false;
    $localStorage.activame = $localStorage.activame || false;
    $localStorage.contando = $localStorage.contando || false;

  });
