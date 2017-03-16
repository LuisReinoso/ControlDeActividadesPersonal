'use strict';
angular.module('main')
  .service('PersistenciaRegistro', function($log, $localStorage) {

    $log.log('Service: PersistenciaRegistro en modulo main');

    var contadorRegistros;

    /**
        Almacena un nuevo registro
    **/
    this.guardarRegistro = function(idActividad, idEstadoDeAnimo, descripcion,
                                    fecha, horas, minutos, segundos) {

      contadorRegistros = $localStorage.contadorRegistros + 1;

      //Nuevo registro
      var registro = {
        'id': contadorRegistros,
        'idActividad': idActividad,
        'idEstadoDeAnimo': idEstadoDeAnimo,
        'descripcion': descripcion,
        'fecha': fecha,
        'horas': horas,
        'minutos': minutos,
        'segundos': segundos
      }

      $localStorage.registros.push(registro);
      $localStorage.contadorRegistros = contadorRegistros;

    }

  });
