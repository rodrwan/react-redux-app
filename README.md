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

### Store

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

### Reducers


### Conectando componentes con nuestro store.

```js
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setNumbers } from '../reducers/users';

class HomePage extends React.Component {
  componentWillMount() {
    // pasamos un arreglo de numeros a nuestro *async action creator*
    // Este aac es pasado a traves de mapDispatchToProps
    this.props.setNumbers([0, 1, 2, 3, 4]);
  }

  // numbers es un props que es extraido desde el store y pasado a traves de los props del componente
  // por medio del metodo *connect*
  render() {
    return (
      <div>
        {this.props.numbers.map((n, idx) => (
          <p key={`n-${idx}`}>
            {n.}
          </p>
        ))}
      </div>
    );
  }
}

// PropTypes es una forma "semi estricta" de definir el tipo de dato que será pasada a traves de los props del componente.
HomePage.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  setNumbers: PropTypes.func.isRequired,
};
/*
usando *connect* nos permite "conectar" nuestro store, con el componente
el primer parentisis de connect, recibe algunos argumentos (mostraré los que siempre uso):

- mapStateToProps: Si este argumento es definido y usado en el método connect las propiedades seleccionadas del store serán pasadas al componente definido en el segundo par de parentesis.
Este metodo debe retornar un objeto, con las propiedades que serán heredadas por medio de los props del respectivo componente.

- mapDispatchToProps: Este parametro representa los *action creators* que podrán ser usados dentro del componente pasada en el segundo par de parentesis. En general, estos métodos salen del reducer a ser usado dentro del componente.
*/
const mapStateToProps = state => ({
  numbers: state.numbers.element,
});

const mapDispatchToProps = {
  setNumbers,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
```

# React-router

React reuter nos permite extender nuestra aplicación para tener más de una ruta dentro de nuestro sistema, pero para esto no usamos directamenre react-router, sino que instalamos lo siguiente.

```sh
$ yarn add react-router-dom
```

Esta librería nos permite crear rutas, utilizando compenentes y otras utilidades que nos permiten hacer las redirecciones internas a otras rutas sin perder el scope de nuestra aplicación.

