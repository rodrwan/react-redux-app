# React redux app

Esta mini aplicación tiene como proposito, ser una guía básica para poder iniciar un proyecto usando react + redux + react-router.

No está pensada para ser "SEO-frendly", para ese tipo de cosas, puedes utilizar [Next.js](https://learnnextjs.com/).

# Base

Esta aplicación está basada en los componentes y configuraciones proporcionadas por [create-react-app](https://github.com/facebook/create-react-app).

# Redux

Para usar [Redux](https://es.redux.js.org/) con react se deben instalar los siguintes paquetes.

```sh
$ yarn add redux redux-thunk redux-logger redux-devtools-extension react-redux
```

- [redux](https://github.com/reactjs/redux): Libreria princial de redux para javascript.
- [redux-thunk](https://github.com/gaearon/redux-thunk):
Redux Thunk middleware te permite retornar funciones como *action creators* en vez de *actions* normales.
- [redux-logger](https://github.com/evgenyrodionov/redux-logger): Permite loggear en la consola los cambios de estados de una forma más amigable.
- [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension): Utilidad para chrome que permite visualizar nuestro store de forma elegante.
- [react-redux](https://github.com/reactjs/react-redux): Libreria que permite juntar react con redux.

### Usando redux en react

Una vez instaladas las librerias, debemos incluir nuestra aplicación (componente principal, por lo general *App*) dentro del componente proporcionado por *react-redux*.

```js
import { Provider } from 'react-redux';
...

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

...
```

Esto nos permite acceder a nuestro *store* (Aún no difinido), por medio de los props de nuestros componentes internos (recordar esto, que más adelante lo veremos en detalle, no es tan simple, pero a la vez si xD).

### store

```js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducers from './rootReducers';

...
const middleware = [thunk, logger];
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middleware)));

...
// main app render
```
# React-router

React reuter nos permite extender nuestra aplicación para tener más de una ruta dentro de nuestro sistema, pero para esto no usamos directamenre react-router, sino que instalamos lo siguiente.

```sh
$ yarn add react-router-dom
```

Esta librería nos permite crear rutas, utilizando compenentes y otras utilidades que nos permiten hacer las redirecciones internas a otras rutas sin perder el scope de nuestra aplicación.

