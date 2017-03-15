'use strict';
angular.module('main')
.service('PersistenciaRegistro', function ($log) {

  $log.log('Service: PersistenciaRegistro en modulo main');

  var contadorRegistros;


  /**
      Almacena un nuevo registro
  **/
  this.guardarRegistro = function(idActividad, idEstadoDeAnimo, descripcion, fecha) {

    localforage.getItem('contadorRegistros').then(function (value) {
      contadorRegistros = value + 1;
    }).catch(function(err) {
    console.log(err);
    });

    // Registro
    localforage.getItem('registros').then(function (registros) {

      //Nuevo registro
      var registro = {
        'id': contadorRegistros,
        'idActividad': idActividad,
        'idEstadoDeAnimo': idEstadoDeAnimo,
        'descripcion': descripcion,
        'fecha': fecha
      }

      registros.push(registro);

      // Actualizar registros
      localforage.setItem('registros', registros).then(function (value) {

      }).catch(function(err) {
      console.log(err);
      });

      // Actualizar contador registro
      localforage.setItem('contadorRegistros', contadorRegistros).then(function (value) {

      }).catch(function(err) {
      console.log(err);
      });

    }).catch(function(err) {
    console.log(err);
    });
  }

});
