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

      // Actualiza actividad
      this.addTiempoActividad(idActividad, segundos, minutos, horas)
      $localStorage.actividades[idActividad].contador = $localStorage.actividades[idActividad].contador + 1;

      // Agregar a registros
      $localStorage.registros.push(registro);
      $localStorage.contadorRegistros = contadorRegistros;
    }

    /**
      Realiza la actualizacion de las horas minutos y segundos de la actividad
    **/
    this.addTiempoActividad = function (idActividad, segundos, minutos, horas) {
      $localStorage.actividades[idActividad].segundos = $localStorage.actividades[idActividad].segundos + segundos;
      if ($localStorage.actividades[idActividad].segundos >= 60) {
        $localStorage.actividades[idActividad].segundos = $localStorage.actividades[idActividad].segundos - 60;
        $localStorage.actividades[idActividad].minutos = $localStorage.actividades[idActividad].minutos + 1;
      }

      $localStorage.actividades[idActividad].minutos = $localStorage.actividades[idActividad].minutos + minutos;

      if ($localStorage.actividades[idActividad].minutos >= 60) {
        $localStorage.actividades[idActividad].minutos = $localStorage.actividades[idActividad].minutos - 60;
        $localStorage.actividades[idActividad].horas = $localStorage.actividades[idActividad].horas + 1;
      }

      $localStorage.actividades[idActividad].horas = $localStorage.actividades[idActividad].horas + horas;
    }

    /**
      Generar frecuencia
    **/
    this.generarFrecuencia = function(idActividad) {

      var nombreActividad = $localStorage.actividades[idActividad].nombre;
      var indice = $localStorage.etiquetasActividades.indexOf(nombreActividad);

      if (indice == -1) {
        $localStorage.etiquetasActividades.push(nombreActividad);
        $localStorage.frecuenciasActividades.push(1);
      } else {
        $localStorage.frecuenciasActividades[indice] = $localStorage.frecuenciasActividades[indice] + 1;
      }
    }

    /**
      Genera tiempo en horas
    **/
    this.generarTiempoHoras = function(idActividad) {

      var nombreActividad = $localStorage.actividades[idActividad].nombre;
      var horasActividad = $localStorage.actividades[idActividad].horas;

      var indice = $localStorage.etiquetasActividades.indexOf(nombreActividad);

      if ($localStorage.frecuenciasTiempoHoras[indice] == undefined) {
        $localStorage.frecuenciasTiempoHoras.push(horasActividad);
      } else {
        $localStorage.frecuenciasTiempoHoras[indice] = horasActividad;
      }
    }

    /**
      Genera tiempo en minutos
    **/
    this.generarTiempoMinutos = function(idActividad) {

      var nombreActividad = $localStorage.actividades[idActividad].nombre;
      var horasActividad = $localStorage.actividades[idActividad].horas;
      var minutosActividad = $localStorage.actividades[idActividad].minutos;

      minutosActividad = minutosActividad + horasActividad * 60;

      var indice = $localStorage.etiquetasActividades.indexOf(nombreActividad);

      if ($localStorage.frecuenciasTiempoMinutos[indice] == undefined) {
        $localStorage.frecuenciasTiempoMinutos.push(minutosActividad);
      } else {
        $localStorage.frecuenciasTiempoMinutos[indice] = minutosActividad;
      }
    }

    /**
      Generar actividades por dia de la semana
      Domingo: 0
      Lunes: 1
      ...
      Sabado: 6
    **/
    this.generarFrecuenciasActividadSemana = function (fecha) {

      var diaDeLaSemana = fecha.getDay();
      $localStorage.frecuenciasActividadesSemana[diaDeLaSemana] =
      $localStorage.frecuenciasActividadesSemana[diaDeLaSemana] + 1;

    }

    /**
      Generar actividades por mes
      enero: 0
      febrero: 1
      ...
      diciembre: 11
    **/
    this.generarFrecuenciasActividadMes = function (fecha) {

      var mes = fecha.getMonth();
      $localStorage.frecuenciasActividadesMes[mes] =
      $localStorage.frecuenciasActividadesMes[mes] + 1;

    }


  });
