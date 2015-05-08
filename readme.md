# Tarea TDWM: Carrito de compra en React

### Demo
![Demo tarea](https://raw.githubusercontent.com/mammut/tdwm/master/tarea/Demo.gif)



### Instalar dependencias node y bower:

```bash
bower install
npm install
```

### Desarrollar:

en la consola:

```bash
gulp watch
```
en otro tab:

```bash
cd dist
puer
```
(Si no tienen puer instalado lo pueden instalar haciendo: `npm install puer -g`)

### SCSS

El proyecto viene con el framework CSS [Skeleton](http://getskeleton.com/#intro), pueden usarlo o no usarlo, es preferencia suya. Pueden eliminarlo en el archivo **sass/main.scss** quitando la linea 8 y 9.

Para trabajar con su css pueden hacerlo en el archivo **sass/partials/_layout.scss**. Si prefieren pueden separar en archivos distintos los cuales tienen que agregar en **sass/main.scss** y crear el archivo correspondiente en */partials/_archivo.scss*

También trae una librería de iconos llamada [ionicons](http://ionicons.com/) que también pueden usar por ejemplo:

```html
<div class="Carrito">
  <h3><i class="ion-ios-cart"></i> Carrito de compra</h3>
</div>
```
