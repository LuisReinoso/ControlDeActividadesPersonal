'use strict';
angular.module('main', [
    'ionic',
    'ngCordova',
    'ui.router',
    // TODO: load other modules selected during generation
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    // ROUTING with ui.router
    $urlRouterProvider.otherwise('/main/list');
    $stateProvider
      // this state is placed in the <ion-nav-view> in the index.html
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main/templates/menu.html',
        controller: 'MenuCtrl as menu'
      })
      .state('main.list', {
        url: '/list',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/list.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
      })
      .state('main.listDetail', {
        url: '/list/detail',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/list-detail.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
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
      });
  })

  .run(function() {

    // Actividades
    localforage.getItem('actividades').then(function(value) {
      // Carga valores por default
      if (!value) {
        var actividades = [{
            'id': 0,
            'nombre': 'Alimentacion',
            'imagen': 'img/alimentacion.png',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 1,
            'nombre': 'Caminata',
            'imagen': 'img/caminata.png',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 2,
            'nombre': 'Cocinar',
            'imagen': 'img/cocinar.png',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 3,
            'nombre': 'Deporte',
            'imagen': 'img/deporte.png',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 4,
            'nombre': 'Descansar',
            'imagen': 'img/descansar.png',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 5,
            'nombre': 'Escribir',
            'imagen': 'img/escribir.png',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 6,
            'nombre': 'Estudiar',
            'imagen': 'img/estudiar.png',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 7,
            'nombre': 'Higiene',
            'imagen': 'img/higiene.png',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 8,
            'nombre': 'Hogar',
            'imagen': 'img/hogar.png',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 9,
            'nombre': 'Leer',
            'imagen': 'img/leer.png',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 10,
            'nombre': 'Meditar',
            'imagen': 'img/meditar.png',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 11,
            'nombre': 'Ocio',
            'imagen': 'img/ocio.png',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 12,
            'nombre': 'Programar',
            'imagen': 'img/programar.png',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 13,
            'nombre': 'Redes sociales',
            'imagen': 'img/redesSociales.png',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 14,
            'nombre': 'Trabajar',
            'imagen': 'img/trabajar.png',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          }
        ];

        localforage.setItem('actividades', actividades).then(function(value) {
          console.log(value);
        }).catch(function(err) {
          console.log(err);
        });
      }

    }).catch(function(err) {
      console.log(err);
    });


    // Estados de animo
    localforage.getItem('estadosDeAnimo').then(function(value) {
      // Carga valores por default
      if (!value) {
        var estadosDeAnimo = [{
            'id': 0,
            'nombre': 'Calma energia',
            'imagen': 'img/calmaEnergia.png',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 1,
            'nombre': 'Calma cansancio',
            'imagen': 'img/caminata.png',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 2,
            'nombre': 'Tension energía',
            'imagen': 'img/tensionEnergia.png',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          },
          {
            'id': 3,
            'nombre': 'Tension cansancio',
            'imagen': 'img/tensionCansancio.png',
            'contador': 0,
            'horas': 0,
            'minutos': 0,
            'segundos': 0
          }
        ];

        localforage.setItem('estadosDeAnimo', estadosDeAnimo).then(function(value) {
          console.log(value);
        }).catch(function(err) {
          console.log(err);
        });
      }

    }).catch(function(err) {
      console.log(err);
    });


    // Contador de Registros
    localforage.getItem('contadorRegistros').then(function (value) {

      if (!value) {
        localforage.setItem('contadorRegistros', 0).then(function (value) {
        }).catch(function(err) {
          console.log(err);
        });
      }

    }).catch(function(err) {
    console.log(err);
    });


    // Registros
    localforage.getItem('registros').then(function (value) {

      if (!value) {
        localforage.setItem('registros', []).then(function (value) {
        }).catch(function(err) {
          console.log(err);
        });
      }

    }).catch(function(err) {
    console.log(err);
    });

  });
