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

      // Actualizar estado de animo
      this.addTiempoAnimo(idEstadoDeAnimo, segundos, minutos, horas)
      $localStorage.estadosDeAnimo[idEstadoDeAnimo].contador = $localStorage.estadosDeAnimo[idEstadoDeAnimo].contador + 1;

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
      Realiza la actualizacion de las horas minutos y segundos de la estado de animo
    **/
    this.addTiempoAnimo = function (idEstadoDeAnimo, segundos, minutos, horas) {
      $localStorage.estadosDeAnimo[idEstadoDeAnimo].segundos = $localStorage.estadosDeAnimo[idEstadoDeAnimo].segundos + segundos;
      if ($localStorage.estadosDeAnimo[idEstadoDeAnimo].segundos >= 60) {
        $localStorage.estadosDeAnimo[idEstadoDeAnimo].segundos = $localStorage.estadosDeAnimo[idEstadoDeAnimo].segundos - 60;
        $localStorage.estadosDeAnimo[idEstadoDeAnimo].minutos = $localStorage.estadosDeAnimo[idEstadoDeAnimo].minutos + 1;
      }

      $localStorage.estadosDeAnimo[idEstadoDeAnimo].minutos = $localStorage.estadosDeAnimo[idEstadoDeAnimo].minutos + minutos;

      if ($localStorage.estadosDeAnimo[idEstadoDeAnimo].minutos >= 60) {
        $localStorage.estadosDeAnimo[idEstadoDeAnimo].minutos = $localStorage.estadosDeAnimo[idEstadoDeAnimo].minutos - 60;
        $localStorage.estadosDeAnimo[idEstadoDeAnimo].horas = $localStorage.estadosDeAnimo[idEstadoDeAnimo].horas + 1;
      }

      $localStorage.estadosDeAnimo[idEstadoDeAnimo].horas = $localStorage.estadosDeAnimo[idEstadoDeAnimo].horas + horas;
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
      Generar frecuencia
    **/
    this.generarFrecuenciaEstadosDeAnimo = function(idEstadoDeAnimo) {

      var nombreEstado = $localStorage.estadosDeAnimo[idEstadoDeAnimo].nombre;
      var indice = $localStorage.etiquetasEstadosDeAnimo.indexOf(nombreEstado);

      $localStorage.frecuenciasEstadosDeAnimo[indice] = $localStorage.frecuenciasEstadosDeAnimo[indice] + 1;
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
    this.generarFrecuenciasActividadMes = function(fecha) {

      var mes = fecha.getMonth();
      $localStorage.frecuenciasActividadesMes[mes] =
      $localStorage.frecuenciasActividadesMes[mes] + 1;

    }

    /**
      Elimnar registro y sus estadisticas
    **/
    this.eliminarRegistro = function(indiceRegistro) {

      var registro = $localStorage.registros[indiceRegistro];
      var actividad = $localStorage.actividades[registro.idActividad];
      var estadoDeAnimo = $localStorage.estadosDeAnimo[registro.idEstadoDeAnimo];

      // Elimina contador de actividad
      $localStorage.actividades[registro.idActividad].contador =
      $localStorage.actividades[registro.idActividad].contador - 1;

        //Frecuencia actividad
      var indiceActividad = $localStorage.etiquetasActividades.indexOf(actividad.nombre);
      $localStorage.frecuenciasActividades[indiceActividad] =
      $localStorage.frecuenciasActividades[indiceActividad] - 1;

        //Frecuencia actividad mes
      $localStorage.frecuenciasActividadesMes[registro.fecha.getMonth()] =
      $localStorage.frecuenciasActividadesMes[registro.fecha.getMonth()] - 1;

        //Frecuencia actividad semana
      $localStorage.frecuenciasActividadesSemana[registro.fecha.getDay()] =
      $localStorage.frecuenciasActividadesSemana[registro.fecha.getDay()] - 1;

      // Elimina tiempo dedicado a actividad
      var segundosActividad = this.conversorTiempoASegundos(actividad.horas,
      actividad.minutos, actividad.segundos);

      var segundosRegistro = this.conversorTiempoASegundos(registro.horas,
      registro.minutos, registro.segundos);

      var tiempoActividad = this.conversorSegundosATiempo(segundosActividad - segundosRegistro);

      $localStorage.actividades[registro.idActividad].horas = tiempoActividad[0];
      $localStorage.actividades[registro.idActividad].minutos = tiempoActividad[1];
      $localStorage.actividades[registro.idActividad].segundos = tiempoActividad[2];

        // Frecuencia horas
      $localStorage.frecuenciasTiempoHoras[indiceActividad] = tiempoActividad[0];

        //Frecuencias minutos
      $localStorage.frecuenciasTiempoMinutos[indiceActividad] =
      tiempoActividad[0] * 60 + tiempoActividad[1];

      // Elimina contador de estado de animo
      $localStorage.estadosDeAnimo[registro.idEstadoDeAnimo].contador =
      $localStorage.estadosDeAnimo[registro.idEstadoDeAnimo].contador - 1;

        //Frecuencia actividad
      var indiceEstadoDeAnimo = $localStorage.etiquetasEstadosDeAnimo.indexOf(estadoDeAnimo.nombre);
      $localStorage.frecuenciasEstadosDeAnimo[indiceEstadoDeAnimo] =
      $localStorage.frecuenciasEstadosDeAnimo[indiceEstadoDeAnimo] - 1;

      // Elimina tiempo dedicado a un estado DeAnimo
      var segundosEstadoDeAnimo = this.conversorTiempoASegundos(estadoDeAnimo.horas,
      estadoDeAnimo.minutos, estadoDeAnimo.segundos);

      var tiempoActividad = this.conversorSegundosATiempo(segundosEstadoDeAnimo - segundosRegistro);

      $localStorage.estadosDeAnimo[registro.idEstadoDeAnimo].horas = tiempoActividad[0];
      $localStorage.estadosDeAnimo[registro.idEstadoDeAnimo].minutos = tiempoActividad[1];
      $localStorage.estadosDeAnimo[registro.idEstadoDeAnimo].segundos = tiempoActividad[2];

      // Elimina del registro
      $localStorage.registros.splice(indiceRegistro,1);
    }

    this.conversorTiempoASegundos = function(horas, minutos, segundos) {
      var tiempo = horas * 3600 + minutos * 60 + segundos;
      return tiempo;
    }

    this.conversorSegundosATiempo = function(segundos) {
      var segundosTiempo = segundos % 60;
      var minutos = (segundos - segundosTiempo) / 60;
      var minutosTiempo = minutos % 60;
      var horasTiempo = (minutos - minutosTiempo) / 60;
      return [horasTiempo, minutosTiempo, segundosTiempo];
    }

  });
