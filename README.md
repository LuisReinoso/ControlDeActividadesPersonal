# Control De Actividades Personal

## Objetivos

* Obtener estadísticas sobre las actividades que se realiza a diario.

  * Mayor actividad realizada
  * Tiempo dedicado a una actividad
  * Mayor actividad por día
  * Mayor actividad por mes
  * Estados de animo

## Explicación

Sabes cuánto tiempo utilizas en realizar una actividad?, Te interesa obtener estadísticas y observar en que actividades inviertes tu tiempo, con esta app registra las actividades que realizas, comprueba el tiempo que te demoras en ellas y toma una decisión en base a esto.

Mejora o cultiva nuevas habilidades dedicando más tiempo a las de tu preferencia, se un experto en determinadas actividades dedicando más tiempo a las mismas.

## Desarrollo

Requerimientos
```bash
npm i -g yo gulp bower
```

Instalar paquetes del proyecto
```bash
npm install
bower install
```

Generar los recursos de los iconos para ello debe haber dos archivos en:
```bash
resources
|-android
  |-icon.png
  |-splash.png
```

Ejecutar
```bash
npx ionic@1.3.22 resources
```

Levantar proyecto en el navegador
**Importante:** Puede existir problemas dado que usamos cordova y no funciona su api en el navegador
```bash
gulp watch
```

Probar en el telefono
```bash
gulp --livereload "run android"
```

Usar en emulador
```bash
gulp --livereload "emulate android"
```

Mas información de formas de ejecutar la aplicación en:
[https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/intro/quick_start.md](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/intro/quick_start.md)

## Licencia

El programa es software libre: GPL3, ver el archivo de licencia  [LICENSE](LICENSE).
